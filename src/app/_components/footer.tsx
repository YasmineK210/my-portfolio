export default function Footer() {
  return (
    <nav className="bg-[#0f1fff] w-full text-white py-5">
      <div className="flex flex-col items-center justify-center">
        <p>
          📩{" "}
          <a
            href="mailto:kellyyasmine020@gmail.com"
            className="hover:underline"
          >
            kellyyasmine020@gmail.com
          </a>{" "}
          | 💼{" "}
          <a
            href="https://www.linkedin.com/in/kelly-yasmine-69981a276"
            className="hover:underline"
          >
            LinkedIn
          </a>{" "}
          | 💻{" "}
          <a href="https://github.com/YasmineK210" className="hover:underline">
            Github
          </a>
        </p>
      </div>
    </nav>
  );
}
