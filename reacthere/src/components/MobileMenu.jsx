import ThemeIcon from "./ThemeIcon";
import Layout from "./layout";
import { useTheme } from "next-themes";
export default function MobileMenu(props) {
  const closeHandler = () => {
    props.setIsOpen(false);
  };
  const { theme, setTheme } = useTheme();
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
      <header className=" w-screen h-screen top-0 left-0 absolute bg-[#00000070] justify-end flex ">
        <div className="w-10/12 h-screen p-4 bg-white dark:bg-[#111827]">
          <div className="flex justify-between p-4">
            <h1>Logo</h1>
            <div onClick={closeHandler}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M18 6L6 18"
                  stroke="#4B5563"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="#4B5563"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className="items-center flex-row p-4 md:flex">
            <hr className="m-4" />
            <ul className="flex flex-col gap-5 ">
              {["About", "Work", "Testimonial", "Contact"].map((navItem) => {
                return <li>{navItem}</li>;
              })}
            </ul>
            <hr className="m-4" />
            <div className="flex flex-col  m-4">
              <div className="flex justify-between m-4 gap-5">
                <h1 className="font-bold">Switch Theme</h1>
                <div onClick={toggleTheme}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                      stroke="#4B5563"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 2V4"
                      stroke="#4B5563"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 20V22"
                      stroke="#4B5563"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.93018 4.92999L6.34018 6.33999"
                      stroke="#4B5563"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.6602 17.66L19.0702 19.07"
                      stroke="#4B5563"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2 12H4"
                      stroke="#4B5563"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M20 12H22"
                      stroke="#4B5563"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.34018 17.66L4.93018 19.07"
                      stroke="#4B5563"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M19.0702 4.92999L17.6602 6.33999"
                      stroke="#4B5563"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <button className="w-full rounded-xl bg-black text-white p-4 dark:bg-slate-50 dark:text-black text-white">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </header>
    </Layout>
  );
}
