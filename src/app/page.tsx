"use client";

import QuestionButton from "./_components/question-button";
import AnswerBox from "./_components/answer-box";
import { useQnAStore } from "./store/qna-store";

export default function Home() {
  const selectedQuestion = useQnAStore((state) => state.selectedQuestion);
  const setSelectedQuestion = useQnAStore((state) => state.setQuestion);

  return (
    <main className="max-w-5xl mx-auto px-4 py-10 mt-5 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Kelly Yasmine! 👋</h1>
      <p className="text-2xl mt-5">Ask me anything you want to know! 💭</p>

      <div className="flex flex-col sm:flex-row max-w-3xl w-full mt-10 gap-4 sm:items-center justify-center">
        <form className="w-full sm:max-w-sm">
          <select
            id="questions"
            value={selectedQuestion ?? ""}
            onChange={(e) => setSelectedQuestion(e.target.value || null)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">Select a question</option>
            <option value="introduction">Who is Kelly Yasmine?</option>
            <option value="skills">What are Kelly Yasmine's skills?</option>
            <option value="contact">
              How to get in touch with Kelly Yasmine?
            </option>
            <option value="languages">
              What languages does Kelly Yasmine speak?
            </option>
          </select>
        </form>
        <QuestionButton />
      </div>

      <div className="mt-10 w-full max-w-3xl">
        <AnswerBox />
      </div>
    </main>
  );
}
