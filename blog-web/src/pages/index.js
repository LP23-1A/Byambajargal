import Ad from "@/components/Ad";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Allblogpost from "@/components/Allblogpost";
import Trending from "@/components/Trending";

let api = "https://dev.to/api/articles?username=gereltuyamz";
export default function Home() {
  const [data, setData] = useState([]);
  const initData = useRef([])
  const getData = async (api) => {
    let res = await axios.get(api);
    initData.current=res.data
    setData(res.data);
    };
    const filter = (name) => setData(() => initData.current.filter((el) => el.tags === name));
   const handler = () => {
     getData("https://dev.to/api/articles")  }
  useEffect(() => {
    getData(api);
  }, []);
  return (
    <main className="flex flex-col w-screen h-fit gap-[100px] bg-slate-50 justify-center items-center md:px-40 ">
      <Navbar />
      <Ad />
      <div className="flex flex-col gap-10 justify-center px-40">
        <p className="px-40 font-bold text-2xl">Trending</p>
        <div className="flex flex-wrap gap-10 justify-center">
           {data.map((el) => {
         return(
           <div className="flex gap-10  flex-wrap">
          <Trending
          trendImg={`url(${el.social_image})`}
          status={el.tags} 
          desc={el.title}
          />
        </div>
         )
        })}
        </div>
       
       
      </div>

      <div className="flex flex-col gap-[32px] py-20 px-40 justify-center ">
        <h1 className="font-bold px-40 text-2xl">All Blog post</h1>
        <div className="flex justify-between px-40">
           <div className="flex gap-[20px] text-xs font-bold">
          <p>All</p>
          <p onClick={() => filter('webdev')}>webdev</p>
          <p onClick={() => filter('programming')}>programming</p>
          <p onClick={() => filter('nextjs')}>nextjs</p>
        </div>
        <p className="text-xs font-bold px-40 ">View all</p>
        </div>
       
        <div className="flex gap-10 px-40 flex-wrap ">
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
          <button onClick={handler} className="border-2 border-gray-300 h-10 w-40 rounded-xl">Load more</button>
        </div>
      </div>
      <Footer />
    </main>
  );
}
