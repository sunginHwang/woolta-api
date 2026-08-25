// react-tech-blog-api PostService.removeMarkupLanguage / makePostSubDescription 포팅 (정규식 원본 그대로)
const urlReg = '(http|https|ftp|telnet|news|mms)?://(\\w*:\\w*@)?[-\\w.]+(:\\d+)?(/([\\w/_.]*(\\?\\S+)?)?)?';
const specialCharReg = '[-+.^:#,*!()!`/]';
const htmlReg = '<(/)?([a-zA-Z]*)(\\\\s[a-zA-Z]*=[^>]*)?(\\\\s)*(/)?>';

const subContentReg = new RegExp(`${urlReg}|${specialCharReg}|${htmlReg}`, 'g');

export const removeMarkupLanguage = (markupContent: string) => {
  return markupContent
    .replace(subContentReg, '')
    .replace(/\n/g, '')
    .split('[')
    .join('')
    .split(']')
    .join('');
};

export const makePostSubDescription = (content: string) => {
  const subContent = removeMarkupLanguage(content);

  if (subContent.length > 100) {
    return `${subContent.substring(0, 100)}...`;
  }

  return `${subContent}...`;
};
