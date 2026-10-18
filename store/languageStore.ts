import { create } from "zustand";

type Language = {
  portuguese: string;
  english: string;
};

type LanguageStore = {
  language: Language;
  setLanguage: (language: Language) => void;
};

export const useLanguageStore = create<LanguageStore>((set) => ({
  language: {
    portuguese: "Português",
    english: "Inglês",
  },
  setLanguage: (language) => set({ language }),
}));
