import { CatRawModel } from "../../api/models/CatRawModel.ts";
import { Cat } from "../models/Cat.ts";

export const parseRawCatData = (response: CatRawModel[]): Cat[] => {
  const baseUrl: string = "https://cataas.com/cat/";
  const imageFormat: string = "?type=square&position=center";
  return response.map((cat): Cat => {
    return {
      id: cat._id,
      url: baseUrl + cat._id + imageFormat,
      tags: cat.tags,
      size: cat.size, // need to parse to kb, no time
    };
  });
};
