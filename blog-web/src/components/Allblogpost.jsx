export default function Allblogpost(props) {
  return (
       <div className=" flex flex-col gap-[16px] ">
      <img className="rounded-md" src={props.BlogImg}></img>
      <button className="bg-sky-50 w-fit p-2 text-[#4B6BFB] rounded-md ">{props.status}</button>
      <p className="font-bold text-2xl">{props.desc}</p>
      <span className="text-gray-500">{props.date}</span>
    </div>
   
  );
}
