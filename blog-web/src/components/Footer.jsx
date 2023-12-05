import IconContainer from "./IconContainer";

export default function Footer() {
  return (
    <div className="flex flex-col gap-[20px]">
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
      <div className="flex">

      </div>
    </div>
  );
}
