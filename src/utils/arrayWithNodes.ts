export const NodePerElements = (arr: any, n: number) => {
  let appList: any = [];
  const handler = Array.from(arr);
  while (handler.length > 0) {
    let node = handler.splice(0, n);
    appList.push(node);
  }
  return appList;
};
