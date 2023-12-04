import Allblogpostvalue from "../../components/AllblogpostValue";
import TrendingValue from "../../components/TrendingValue";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 w-screen h-screen items-center justify-center bg-grey">
      <div className="w-[320px] h-[298px]">
         <TrendingValue/>
      </div>
   
    <div className="flex">
       <Allblogpostvalue/>
    </div>
   
    </main>
  )
}