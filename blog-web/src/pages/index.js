import Ad from "@/components/Ad";
import Allblogpostvalue from "@/components/AllblogpostValue";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TrendingValue from "@/components/TrendingValue";
import { useEffect, useState} from "react";
import axios from "axios";

let api = "https://dev.to/api/articles?username=gereltuyamz";
export default function Home() {
  
  const [data, setData] = useState([]); 
   const getData = async (api) => {   
  let res = await axios.get(api);  
  setData((prev) => [...prev, ...res.data]);
   }
  //  const handler = () => {   
  //    getData("https://dev.to/api/articles")  } 
      useEffect(() => {    getData(api);  }, []);
  return (
    <main className="flex flex-col w-screen h-fit gap-[100px] bg-slate-50 justify-center items-center px-40 ">
      <Navbar/>
      <Ad/>
      <div className="flex flex-col gap-10 justify-center px-40">
         <p>Trending</p>
        <div className="flex gap-10 justify-center flex-wrap">
           <TrendingValue />
        </div>
      </div>
     
      <div className="flex flex-col gap-[32px] py-20 px-40 justify-center ">
        <h1 className="font-bold">All Blog post</h1>
        <div className="flex gap-[20px] text-xs font-bold">
          <p>All</p>
          <p>Design</p>
          <p>Travel</p>
          <p>Fashion</p>
          <p>Technology</p>
          <p>Branding</p>
        </div>
        <div className="flex gap-10 flex-wrap">
          {data.map((el) => {
            <Allblogpostvalue
             BlogImg={`url(${el.social_image})` }
             status={el.tags}
             desc={el.title}
             date={el.published_at}
                              />
          })}
           
        </div>
      </div>
      <Footer/>
    </main>
  );
}
