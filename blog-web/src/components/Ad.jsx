import adPic from "../../public/Image.png";
export default function Ad() {
  return (
    <div className="flex flex-col gap-4">
        <div className="relative">
            <img className="w-[1216px] h-[600px]" src={adPic.src}></img>
            <div className="w-[598px] h-[252px] absolute bottom-2 left-2 bg-slate-50 p-[40px] flex flex-col gap-[24px] rounded-md">
        <button className="bg-[#4B6BFB] px-[10px] py-[4px] w-[100px] h-[28px] text-white rounded-md">Technology</button>
        <p className="font-bold text-4xl">Grid system for better Design User Interface</p>
        <span className="text-gray-400">August 20, 2022</span>
      </div>
        </div>
        <div className="flex gap-1  justify-end">
          <button className="border-2 rounded-md px-2 font-bold">Prev</button>
          <button className="border-2 rounded-md px-2 font-bold">Next</button>
        </div>
     
    </div>
  );
}
