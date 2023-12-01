import ThemeIcon from "./ThemeIcon";
import Layout from "./layout";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { useTheme } from "next-themes";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const menuHandler = () => {
    setIsOpen(true);
  };
  const toggleTheme = () => {
    if (theme == "system" || theme == "light") {
      setTheme("dark");
    }
    if (theme == "dark") {
      setTheme("light");
    }
  };
  return (
    <Layout>
      <header className="flex  items-center justify-between p-10 bg-transparent dark:bg-[bg-gray-950 ]">
        <div className="text-xl">Logo</div>
        <div className="md:hidden" onClick={menuHandler}>
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 18H26"
              stroke="#4B5563"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 12H26"
              stroke="#4B5563"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 24H26"
              stroke="#4B5563"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="items-center flex-row hidden sm:flex">
          <ul className="flex gap-5 ">
            {["About", "Work", "Testimonial", "Contact"].map((navItem) => {
              return <li>{navItem}</li>;
            })}
          </ul>
          <div className="flex items-center justify-center">
            <button className="h-24 w-24 p-4 dark:text-red-600 " onClick={toggleTheme}>
              <ThemeIcon />
            </button>
            <button className="w-136 h-32px rounded-xl bg-black text-slate-50 p-2 dark:bg-slate-50 dark:text-black">
              Download CV
            </button>
          </div>
        </div>
      </header>
      {isOpen && <MobileMenu setIsOpen={setIsOpen} />}
    </Layout>
  );
}
