import Experience from "./Experience"
import Aboutbutton from "./aboutbutton"
const Section4 = () => {
    return(
        <div className="flex justify-center items-center flex-col gap-16 sm:py-24 sm:px-20 p-5  bg-gray-100 dark:bg-[#111827] dark:text-[#D1D5DB]">
             <Aboutbutton title="Experience"/>
             <p>Here is a quick summary of my most recent experiences:</p>
             <Experience/>
        </div>  
    )
}
export default Section4