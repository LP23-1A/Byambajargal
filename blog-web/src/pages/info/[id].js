import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function BlogNews() {
  const [detail, setDetail] = useState({});
  const router = useRouter();
  const fetchDetail = async () => {
    const res = await axios.get(
      `https://dev.to/api/articles/${router.query.id}`
    );
    setDetail(res.data);
  };
  useEffect(() => {
    if (!router.isReady) {
      return;
    }
    fetchDetail();
  }, [router.isReady]);
  return (
    <main className="flex flex-col gap-20 justify-center items-center py-40 bg-slate-50 ">
      <h1 className="font-bold text-4xl">{detail.title}</h1>
      <div className="flex gap-4">
        <p className="text-gray-400">{detail?.user?.name}</p>
        <p className="text-gray-400">{detail.published_at}</p>
      </div>
      <img className="rounded-xl" src={detail.social_image}></img>
      <div className="flex flex-col max-w-[1000px] gap-8">
        <p className="text-[#3B3C4A]">
          Traveling is an enriching experience that opens up new horizons,
          exposes us to different cultures, and creates memories that last a
          lifetime. However, traveling can also be stressful and overwhelming,
          especially if you don't plan and prepare adequately. In this blog
          article, we'll explore tips and tricks for a memorable journey and how
          to make the most of your travels. <br></br> One of the most rewarding
          aspects of traveling is immersing yourself in the local culture and
          customs. This includes trying local cuisine, attending cultural events
          and festivals, and interacting with locals. Learning a few phrases in
          the local language can also go a long way in making connections and
          showing respect.
        </p>
        <h1 className="font-bold text-[#181A2A]">Research Your Destination</h1>
        <p className="text-[#3B3C4A]">
          Before embarking on your journey, take the time to research your
          destination. This includes understanding the local culture, customs,
          and laws, as well as identifying top attractions, restaurants, and
          accommodations. Doing so will help you navigate your destination with
          confidence and avoid any cultural faux pas. <br></br> Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. In hendrerit gravida
          rutrum quisque non tellus orci ac auctor. Mi ipsum faucibus vitae
          aliquet nec ullamcorper sit amet. Aenean euismod elementum nisi quis
          eleifend quam adipiscing vitae. Viverra adipiscing at in tellus.
        </p>
        <h1 className="font-bold text-[#181A2A]">Plan Your Itinerary</h1>
        <p className="text-[#3B3C4A]">
          While it's essential to leave room for spontaneity and unexpected
          adventures, having a rough itinerary can help you make the most of
          your time and budget. Identify the must-see sights and experiences and
          prioritize them according to your interests and preferences. This will
          help you avoid overscheduling and ensure that you have time to relax
          and enjoy your journey. <br></br> Vitae sapien pellentesque habitant
          morbi tristique. Luctus venenatis lectus magna fringilla. Nec
          ullamcorper sit amet risus nullam eget felis. Tincidunt arcu non
          sodales neque sodales ut etiam sit amet.
        </p>
      </div>
    </main>
  );
}
