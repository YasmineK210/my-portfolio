import { useProjectStore } from "../../store/project-store";

const TagFilter: React.FC<{ allTags: string[] }> = ({ allTags }) => {
  const { selectedTag, setSelectedTag } = useProjectStore();

  return (
    <div className="flex gap-4 flex-wrap mb-6 p-2">
      {allTags.map((tag) => (
        <button
          key={tag}
          onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
          className={`px-3 py-1 rounded-full border transition text-lg ${
            selectedTag === tag
              ? "bg-[#0f1fff] text-white"
              : "dark:bg-gray-800 bg-gray-50 dark:text-white text-black"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default TagFilter;
