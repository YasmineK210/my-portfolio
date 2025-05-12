import Link from "next/link";

export default function Header() {
  return (
    <nav className="bg-[#0f1fff] shadow mb-6 text-white py-5">
      <ul className="flex space-x-2 font-medium">
        <li>
          <div className="px-4 py-2 tracking-widest font-bold text-center">
            KELLY YASMINE
          </div>
        </li>
        <li>
          <Link href="/">
            <div className="px-4 py-2 rounded hover:underline transition-colors">
              Profile
            </div>
          </Link>
        </li>
        <li>
          <Link href="/experiences">
            <div className="px-4 py-2 rounded hover:underline transition-colors">
              Experience
            </div>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <div className="px-4 py-2 rounded hover:underline transition-colors">
              Projects
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
