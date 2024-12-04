import Ad from "@/components/Ad";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Allblogpost from "@/components/Allblogpost";
import { useRouter } from "next/router";

let api =  "https://dev.to/api/articles";
export default function Home() {
  const [data, setData] = useState([]);
  const [fetchedData, setFetchedData] = useState([]);
  const [count, setCount] = useState(6);
  const initData = useRef([]);
  const router = useRouter();
  const blogRouter = useRouter();

  const reset = () => setData(initData.current);

  const getData = async (api) => {
    let res = await axios.get(api);
    initData.current = res.data;
    setData((allData) => [...allData, ...res.data]);
  };
  
  const blogListing = () => blogRouter.push("blog-listing");

  const filter = (name) => {
    setData(() => initData.current.filter((el) => el.tags === name));
  };

  const handler = () => {
    setCount((prevCount) => prevCount + 6);
  };
  useEffect(() => {
    getData(api);
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      setFetchedData(data.slice(0, count));
    }
  }, [data, count]);

  return (
    <main className="flex flex-col w-screen h-fit gap-[100px] bg-slate-50 justify-center px-40 items-center md:px-40 ">
      {data && data.length !== 0 && <Ad data={data} />}

      <div className="flex flex-col gap-[32px] justify-between w-full">
        <h1 className="font-bold px-20 text-2xl">All Blog post</h1>
        <div className="flex justify-between px-20">
          <div className="flex gap-[20px] text-s font-bold">
            <p onClick={reset}>All</p>
            <p onClick={() => filter("webdev")}>webdev</p>
            <p onClick={() => filter("programming")}>programming</p>
            <p onClick={() => filter("nextjs")}>nextjs</p>
          </div>
          <p onClick={blogListing} className="text-s font-bold">
            View all
          </p>
        </div>
      </div>

      <div className="flex w-fit justify-center gap-16 flex-wrap ">
        {fetchedData.map((el, index) => {
          return (
            <a href={`/info/${el.id}`}>
              <div className=" w-[360px] h-116 border-2 border-gray-300 rounded-xl p-4">
                <Allblogpost
                  key={index}
                  BlogImg={`url(${el.cover_image})`}
                  status={el.tags}
                  desc={el.description}
                  date={el.published_at}
                />
              </div>
            </a>
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
    </main>
  );
}
