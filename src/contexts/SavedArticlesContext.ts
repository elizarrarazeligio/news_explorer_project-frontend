import { createContext } from "react";
import { IArticle } from "@/types/article";

export interface SavedArticlesContextType {
  savedNews: IArticle[] | [];
  setSavedNews: (savedNews: IArticle[]) => void;
  newsLength: number;
  setNewsLength: (newsLength: number | ((prev: number) => number)) => void;
}

export const SavedArticlesContext = createContext<SavedArticlesContextType>({
  savedNews: [],
  setSavedNews: () => {},
  newsLength: 0,
  setNewsLength: () => {},
});
