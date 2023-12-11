import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Allblogpost from "@/components/Allblogpost";
let api = "https://dev.to/api/articles";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function bloglisting() {
  const [data, setData] = useState([]);
  const initData = useRef([]);
  const getData = async (api) => {
    let res = await axios.get(api);
    initData.current = res.data;
    setData(res.data);
  };
  const handler = () => {
    getData("https://dev.to/api/articles");
  };
  useEffect(() => {
    getData(api);
  }, []);
  return (
    <main className="flex flex-col w-screen h-fit gap-[100px] bg-slate-50 justify-center md:px-40 ">
      <Navbar />
        <p className="font-bold text-2xl px-40">All Blog Post</p>
         <div className="flex gap-10 px-40 flex-wrap">
        {data.map((el) => {
          return (
            <div className=" w-[360px] h-116 border-2 border-gray-300 rounded-xl p-4">
              <Allblogpost
                BlogImg={`url(${el.cover_image})`}
                status={el.tags}
                desc={el.description}
                date={el.published_at}
              />
            </div>
          );
        })}
      </div>
     
      <div className="flex justify-center items-center p-20 ">
        <button
          onClick={handler}
          className="border-2 border-gray-300 h-10 w-40 rounded-xl"
        >
          Load more
        </button>
      </div>
      <Footer />
    </main>
  );
}
