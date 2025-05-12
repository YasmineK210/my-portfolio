import React from "react";
import { useQnAStore } from "../store/qna-store";

const syntaxHighlight = (json: string) => {
  if (!json) return "";

  json = json
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  return json.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(?:\s*:)?|\b\d+(?:\.\d+)?\b)/g,
    (match) => {
      let cls = "text-pink-400";
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = "text-cyan-400";
        } else {
          cls = "text-emerald-400";
        }
      }
      return `<span class="${cls}">${match}</span>`;
    }
  );
};

const AnswerBox: React.FC = () => {
  const answer = useQnAStore((state) => state.selectedAnswer);

  let formatted = "";
  if (typeof answer === "string" && answer.trim() !== "") {
    try {
      formatted = JSON.stringify(JSON.parse(answer), null, 2);
    } catch {
      formatted = answer;
    }
  } else {
    formatted = "Select a valid question to get an answer.";
  }
  return (
    <div className="bg-gray-900 rounded-lg min-h-[125px] font-mono">
      <h3 className="text-l font-normal text-white rounded-t-md bg-gray-950 px-3 py-3 mb-2">
        JSON answer:
      </h3>
      <pre
        className="whitespace-pre-wrap p-4"
        dangerouslySetInnerHTML={{ __html: syntaxHighlight(formatted) }}
      />
    </div>
  );
};

export default AnswerBox;
