export function getQtUrlPathFromArgs(argArray?: any) {
  let urlPath = '';

  try {
    urlPath = `/${`${argArray[0]}`.split('questrade.com/')[1]}`;
    if (`${argArray[0]?.url}`) {
      urlPath = `/${`${argArray[0]?.url}`.split('questrade.com/')[1]}`;
    }
  } catch {
    urlPath = '';
  }
  return urlPath;
}
