import { create } from "zustand";

interface ProjectState {
  selectedTag: string | null;
  setSelectedTag: (tag: string | null) => void;
}

export const useProjectStore = create<ProjectState>((set) => ({
  selectedTag: null,
  setSelectedTag: (tag) => set({ selectedTag: tag }),
}));
