import Timeline from "./_components/timeline";
export default function Experiences() {
  return (
    <main className="max-w-screen mx-auto px-4 py-10 flex flex-col justify-center items-center min-h-screen dark:bg-black bg-gray-50">
      <h1 className="text-5xl font-bold mb-10 mt-5 dark:text-white text-black">
        My Experience
      </h1>
      <Timeline />
    </main>
  );
}
