import { useState } from "react";
export default function Ad({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const increment = () => {
    if (activeIndex === data.length - 1) {
      setActiveIndex(0);
      return;
    }
    setActiveIndex((prev) => prev + 1);
  };

  const decrement = () => {
    if (activeIndex === 0) {
      setActiveIndex(data.length - 1);
      return;
    }
    setActiveIndex((prev) => prev - 1);
  };
  return (
    <div className="md:flex md:flex-col md:gap-4 hidden">
      <div className="relative">
        <div
          style={{
            backgroundImage: `url(${data[activeIndex].social_image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className=" md:w-[1216px] md:h-[600px]  rounded-md w-fit"
        ></div>
        <div className=" md:w-[598px] md:h-[252px] absolute bottom-2 left-2 bg-slate-50 py-[40px] px-[20px] flex flex-col gap-[24px] rounded-md w-fit">
          <button className="bg-[#4B6BFB]  p-[4px] w-fit h-[28px] text-white rounded-md ">
            {data[activeIndex].tags}
          </button>
          <p className="font-bold text-2xl"> {data[activeIndex].description}</p>
          <span className="text-gray-400">
            {data[activeIndex].published_at}
          </span>
        </div>
      </div>
      <div className="flex gap-1  justify-end">
        <button
          onClick={decrement}
          className="border-2 rounded-md px-2 font-bold"
        >
          Prev
        </button>
        <button
          onClick={increment}
          className="border-2 rounded-md px-2 font-bold"
        >
          Next
        </button>
      </div>
    </div>
  );
}
