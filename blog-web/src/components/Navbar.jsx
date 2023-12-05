import logo from "../../public/Logo.png"
import search from "../../public/search-outline.png"
export default function Navbar(){
    return(
        <div className="flex gap-10 p-4 justify-center items-center">
         <img className="w-[158px] h-[36px]" src={logo.src}></img>
         <div className=" flex justify-center text-gray-400 w-[667px] gap-[40px]">
            <p>Home</p>
            <p>Blog</p>
            <p>Contact</p>
         </div>
         <div className="flex w-[166px] h-[36px] gap-[12px] p-[8px]">
            <input/>
             <img src={search.src}></img>
         </div>
        </div>
    )
}