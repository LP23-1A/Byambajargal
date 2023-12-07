import IconContainer from "./IconContainer";
import logo from "../../public/Logo.png"
export default function Footer() {
  return (
    <div className="flex flex-col gap-[40px] h-fit bg-gray-200 px-40 w-screen py-20">
      <div className="flex ">
        <div className="flex flex-col gap-[12px] w-[360px] h-[236px] text-base ">
            <p className="text-lg font-bold">About</p>
            <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            <div className="flex flex-col gap-[5px]">
             <p>Email : info@jstemplate.net</p>
             <p>Phone : 880 123 456 789</p>
            </div>
        </div>
        <div className="flex flex-col gap-[8px] w-[1215px] h-[236px] items-center text-gray-600">
        <p>Home</p>
        <p>Blog</p>
        <p>Contact</p>
        </div>
        <div className="flex">
            <IconContainer/>
        </div>
      </div>
      <hr />
      <div className="flex justify-between">
      <div className="flex flex-col w-[223px] h-[54px]">
        <img className="w-[150px] h-[40px] " src={logo.src}></img>
        <p>© All Rights Reserved.</p>
      </div>
      <div className="flex gap-5">
        <p>Terms of Use</p>
        <p>Privacy Policy</p>
        <p>Cookie Policy</p>
      </div>
      </div>
    </div>
  );
}
