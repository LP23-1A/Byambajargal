export default function Allblogpost(props) {
  return (
    <div className=" flex flex-col gap-[16px] ">
      <div
        style={{
          backgroundImage: props.BlogImg,
        }}
             className="h-40 rounded-lg bg-cover"
      ></div>
      <button className="bg-sky-50 w-fit p-2 text-[#4B6BFB] rounded-md">
        {props.status}
      </button>
      <p className="font-bold text-2xl w-fit">{props.desc}</p>
      <span className="text-gray-500">{props.date}</span>
    </div>
  );
}
