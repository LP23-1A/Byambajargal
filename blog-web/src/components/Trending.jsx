export default function Trending(props) {
  return (
    <div className="flex flex-col w-[289px] h-[320px] gap-[20px] relative ">
     
      <div className="">
        <img className="rounded-xl w-[289px] h-[320px]  " src={props.trendImg}></img>
      </div>
      <div className="flex flex-col gap-4 absolute bottom-0  p-2  ">
        <button className="bg-[#4B6BFB] px-[10px] py-[4px] w-[100px] h-[28px] text-white rounded-md">{props.status}</button>
        <p className="text-white font-bold">{props.desc}</p>
      </div>
    </div>
  );
}