// full url  "https://cataas.com/cat/arPZrVNJBZzsC5j7?width=1000&height=1000";
export const buildFullImageUrl = (
  id: string,
  width: number,
  height: number,
): string => {
  const baseUrl: string = "https://cataas.com/cat/";
  const widthString = `?width=${width}`;
  const heightString = `&height=${height}`;
  return baseUrl + id + widthString + heightString;
};
