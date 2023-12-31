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
    <div className="flex gap-10 p-4 justify-center items-center bg-slate-50">
      <img className="w-[158px] h-[36px]" src={logo.src}></img>
      <div className=" flex justify-center text-gray-400 w-[667px] gap-[40px]">
        <p onClick={homePage}>Home</p>
        <p onClick={blogPage}>Blog</p>
        <p onClick={contactPage}>Contact</p>
      </div>
      <div className="flex w-[166px] h-[36px] gap-[12px] p-[8px] items-center">
        <input placeholder="search" className="p-1 rounded-md bg-[#F4F4F5]" />
        <img src={search.src}></img>
      </div>
    </div>
  );
}
