import { ResponseDataItem } from "../../api/models/ResponseDataItem.ts";
import { Cat } from "../models/Cat.ts";

export const parseRawCatData = (response: ResponseDataItem[]): Cat[] => {
  const baseUrl: string = "https://cataas.com/cat/";
  const imageFormat: string = "?type=square&position=center";
  return response.map((cat): Cat => {
    return {
      id: cat._id,
      url: baseUrl + cat._id + imageFormat,
      tags: cat.tags,
      imageSize: cat.size, // need to parse to kb, no time
    };
  });
};
