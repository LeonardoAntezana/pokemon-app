export const getDataRequest = async (url: string) => {
  const data = await fetch(url);
  const parseData = await data.json();
  return parseData;
}