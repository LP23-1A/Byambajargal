const { default: Aboutbutton } = require("./aboutbutton")
import Contactme from "./Contact"
import img  from "../../public/Home/Desktop/Iconemail.png"
import image from "../../public/Home/Desktop/Icon Button.png"
import pic from "../../public/Home/Desktop/Iconphone.png"
import IconContainer from "./IconContainer"



const Footer =() =>(
    <div className="flex justify-center items-center flex-col py-24 px-20  gap-10 dark:text-[#D1D5DB]">
        <Aboutbutton title="Get in touch" />
        <p>What’s next? Feel free to reach out to me if you're looking for <br /> a developer, have a query, or simply want to connect.</p>
       <Contactme img={img.src} email="reachsagarshah@gmail.com" image={image.src}/>
       <Contactme img={pic.src} email="+91 8980500565"  image={image.src}/>
       <p>You may also find me on these platforms!</p>
       <IconContainer/>
    </div>
)
export default Footer