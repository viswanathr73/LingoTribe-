import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("LingoTribe-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("LingoTribe-theme", theme);
    set({ theme });
  },
}));