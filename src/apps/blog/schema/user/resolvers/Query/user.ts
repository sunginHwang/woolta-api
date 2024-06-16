
        import type   { QueryResolvers } from './../../../../generates/types.generated';
        export const user: NonNullable<QueryResolvers['user']> = async (_parent, _arg, _ctx) => {
                /* Implement Query.user resolver logic here */
        return {
            id: '1',
            userId: 'userId',
            userName: 'userName'
        }
        };