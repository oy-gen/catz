import { CatRawModel } from "../models/CatRawModel.ts";
import axios from "axios";

export const fetchCatImage = async (
  id: string,
  width: number,
): Promise<CatRawModel[]> => {
  const url = buildFetchImageUrl(id, width);
  const response = await axios.get(url);
  return response.data;
};

const buildFetchImageUrl = (id: string, width: number): string => {
  // full url  "https://cataas.com/cat/arPZrVNJBZzsC5j7?width=1000&height=1000&json=false";
  const baseUrl: string = "https://cataas.com/api/cat/";
  const widthString = `?width=${width}&json=false`;

  return baseUrl + id + widthString;
};
