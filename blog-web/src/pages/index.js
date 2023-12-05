import Ad from "@/components/Ad";
import Allblogpostvalue from "@/components/AllblogpostValue";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TrendingValue from "@/components/TrendingValue";


export default function Home() {
  return (
    <main className="flex flex-col px-40 max-w-[1917px] h-fit gap-[100px] bg-slate-50">
      <Navbar/>
      <Ad/>
      <TrendingValue />
      <div className="flex flex-col gap-[32px] py-20 ">
        <h1 className="font-bold">All Blog post</h1>
        <div className="flex gap-[20px] text-xs font-bold">
          <p>All</p>
          <p>Design</p>
          <p>Travel</p>
          <p>Fashion</p>
          <p>Technology</p>
          <p>Branding</p>
        </div>
         <Allblogpostvalue />
      </div>
      <Footer/>
     
    </main>
  );
}
