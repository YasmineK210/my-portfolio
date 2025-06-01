"use client";

import AnswerBox from "./_components/answer-box";
import { useQnAStore } from "./store/qna-store";

export default function Home() {
  const selectedQuestion = useQnAStore((state) => state.selectedQuestion);
  const setSelectedQuestion = useQnAStore((state) => state.setQuestion);
  const getAnswerBySection = useQnAStore((state) => state.getAnswerBySection);
  const setAnswer = useQnAStore((state) => state.setAnswer);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newQuestion = e.target.value || null;
    setSelectedQuestion(newQuestion);
    //setSelectedQuestion is asynchronous because it updates React state using a hook (useQnAStore).
    // Therefore, we need to get the answer after the state has been updated.

    if (newQuestion) {
      const answer = getAnswerBySection(newQuestion);
      setAnswer(answer ?? "Select a valid question to get an answer.");
    }
  };

  return (
    <main className="max-w-screen mx-auto px-4 py-10 min-h-screen flex flex-col items-center justify-center dark:bg-black bg-gray-50">
      <h1 className="text-5xl font-bold mb-4 dark:text-white text-black">
        Hi, I'm Kelly Yasmine! 👋
      </h1>
      <p className="text-2xl mt-5 dark:text-white text-black">
        Ask me anything you want to know! 💭
      </p>

      <div className="flex flex-col sm:flex-row max-w-3xl w-full mt-10 gap-4 sm:items-center justify-center">
        <form className="w-full sm:max-w-sm">
          <select
            id="questions"
            value={selectedQuestion ?? ""}
            onChange={handleChange}
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
      </div>

      <div className="mt-10 w-full max-w-3xl">
        <AnswerBox />
      </div>
    </main>
  );
}
