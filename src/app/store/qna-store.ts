import { create } from "zustand";

interface QnAState {
  selectedQuestion: string | null;
  setQuestion: (question: string | null) => void;
  selectedAnswer: string | null;
  setAnswer: (answer: string | null) => void;
  getAnswerBySection: (section: string) => void;
}

export const useQnAStore = create<QnAState>((set) => ({
  selectedQuestion: null,
  setQuestion: (question) => set({ selectedQuestion: question }),
  selectedAnswer: null,
  setAnswer: (answer) => set({ selectedAnswer: answer }),
  getAnswerBySection: async (section) => {
    try {
      const response = await fetch("/data/qna.json");
      const data = await response.json();
      const answer = data[section];
      set({ selectedAnswer: JSON.stringify(answer, null, 2) });
    } catch (error) {
      console.error("Error fetching answer:", error);
      set({ selectedAnswer: "Error fetching answer" });
    }
  },
}));
