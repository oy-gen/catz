export interface Cat {
  id: string;
  tags: string[];
  url: string;
  size: number;
}

export interface CatData {
  cats: Cat[] | null;
  isLoading: boolean;
  error: string | null;
}

export interface CatImageData {
  [key: string]: CatImage;
}

export interface CatImage {
  catImage: string;
  width: number;
}
