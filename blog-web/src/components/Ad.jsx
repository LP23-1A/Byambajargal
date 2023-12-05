import adPic from "../../public/Image.png";
export default function Ad() {
  return (
    <div>
        <div className="relative">
            <img className="w-[1216px] h-[600px]" src={adPic.src}></img>
        </div>
      <div className="w-[598px] h-[252px] absolute top-[55%] left-[13%] bg-slate-50 p-[40px] flex flex-col gap-[24px] rounded-md">
        <button className="bg-[#4B6BFB] px-[10px] py-[4px] w-[100px] h-[28px] text-white rounded-md">Technology</button>
        <p className="font-bold text-4xl">Grid system for better Design User Interface</p>
        <span className="text-gray-400">August 20, 2022</span>
      </div>
    </div>
  );
}
