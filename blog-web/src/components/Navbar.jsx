import logo from "../../public/Logo.png";
import search from "../../public/search-outline.png";
import { useRouter } from "next/router";
export default function Navbar() {
  const homeRouter = useRouter();
  const homePage = () => homeRouter.push("home");
  const contactRouter = useRouter();
  const contactPage = () => contactRouter.push("contact");
  const blogRouter = useRouter();
  const blogPage = () => blogRouter.push("blog-listing");
  return (
    <div className=" md:flex md:gap-10 md:p-4 md:justify-center md:items-center bg-slate-50 p-0 ">
      <img className="w-[158px] h-[36px]" src={logo.src}></img>
      <div className=" md:flex md:justify-center  text-gray-400 md:w-[667px] md:gap-[40px] hidden ">
        <p onClick={homePage}>Home</p>
        <p onClick={blogPage}>Blog</p>
        <p onClick={contactPage}>Contact</p>
      </div>
      <div className="md:flex md:w-[166px] md:h-[36px] md:gap-[12px] md:p-[8px] md:items-center hidden">
        <input placeholder="search" className="p-1 rounded-md bg-[#F4F4F5]" />
        <img src={search.src}></img>
      </div>
    </div>
  );
}
