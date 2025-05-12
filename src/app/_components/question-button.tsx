"use client";

import React from "react";
import { useQnAStore } from "../store/qna-store";

const QuestionButton: React.FC = () => {
  const selectedQuestion = useQnAStore((state) => state.selectedQuestion);
  const getAnswerBySection = useQnAStore((state) => state.getAnswerBySection);
  const setAnswer = useQnAStore((state) => state.setAnswer);

  const handleClick = () => {
    if (selectedQuestion) {
      const answer = getAnswerBySection(selectedQuestion);
      setAnswer(answer ?? "Select a valid question to get an answer.");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      disabled={!selectedQuestion}
    >
      Ask
    </button>
  );
};

export default QuestionButton;
