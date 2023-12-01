import endimg from "../../public/Home/Desktop/Iconend.png"
const End = () =>{
    return(
        <div className="flex justify-center items-center gap-2 sm:gap-20 sm:py-24 sm:px-20 p-1 bg-gray-100 dark:bg-[#111827] dark:text-[#D1D5DB]">
            <img src={endimg.src}></img>
            <p className="text-xs p-3 sm:text-lg ">2023 | Designed and coded with ❤️️ by Sagar Shah</p>
        </div>
    )
}
export default End