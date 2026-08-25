import webpush from 'web-push';
import { GraphQLError } from 'graphql/error';
import { WebPushSubscription } from '../../../../prisma/generated/blog';
import { prismaBlog } from '../utils/prismaClient';

export interface PushNotification {
  title: string;
  content: string;
  url: string;
}

const VAPID_SUBJECT = 'https://blog.woolta.com';

// VAPID 키는 원본과 동일하게 DB web_push_key(id=1)에서 읽는다
const getWebPushKey = async () => {
  const webPushKey = await prismaBlog.webPushKey.findUnique({ where: { id: 1 } });

  if (!webPushKey) {
    throw new GraphQLError('not found webPushKey', { extensions: { code: 'NOT_FOUND' } });
  }

  return webPushKey;
};

const sendPush = async (subscriptions: WebPushSubscription[], pushNotification: PushNotification) => {
  const { publicKey, privateKey } = await getWebPushKey();
  const payload = JSON.stringify(pushNotification);

  await Promise.all(
    subscriptions.map(async (subscription) => {
      try {
        await webpush.sendNotification(
          {
            endpoint: subscription.endPoint,
            keys: { p256dh: subscription.pushKey, auth: subscription.auth },
          },
          payload,
          { vapidDetails: { subject: VAPID_SUBJECT, publicKey, privateKey } },
        );
      } catch (e) {
        // 원본과 동일하게 구독자별 발송 실패는 로그만 남기고 계속 진행
        console.log(`notification fail endPoint:${subscription.endPoint}, key:${subscription.pushKey}, auth:${subscription.auth}`, e);
      }
    }),
  );
};

export const allSendPush = async (pushNotification: PushNotification) => {
  const subscriptions = await prismaBlog.webPushSubscription.findMany();
  await sendPush(subscriptions, pushNotification);
};

export const addPushSubscription = async (req: { key: string; auth: string; endPoint: string }) => {
  const sameSubscription = await prismaBlog.webPushSubscription.findFirst({
    where: { auth: req.auth, pushKey: req.key },
  });

  if (sameSubscription) {
    return;
  }

  const subscription = await prismaBlog.webPushSubscription.create({
    data: { auth: req.auth, pushKey: req.key, endPoint: req.endPoint },
  });

  await sendPush([subscription], {
    title: 'blog.woolta.com',
    content: 'woolta블로그를 구독해주셔서 감사합니다. :)',
    url: 'https://blog.woolta.com',
  });
};

export const removePushSubscription = async (subscriptionAuthKey: string) => {
  // 원본 동작 보존: 클라이언트가 보낸 key 값을 auth 컬럼으로 조회해 삭제한다
  const subscription = await prismaBlog.webPushSubscription.findFirst({
    where: { auth: subscriptionAuthKey },
  });

  if (subscription) {
    await prismaBlog.webPushSubscription.delete({ where: { id: subscription.id } });
  }
};
