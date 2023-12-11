import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Error() {
  return (
    <main>
      <Navbar />
      <div className="flex gap-40  justify-center items-center bg-slate-50 p-40">
        <p className="text-8xl">404</p>
        <div className="flex flex-col gap-10">
         <h1 className="font-bold text-2xl">Page Not Found</h1>
         <p className="text-[#696A75]">We're sorry, This page is unknown or does not exist the page you are looking for.</p>
         <button className="p-4 font-bold text-slate-50 h-fit w-fit bg-[#4B6BFB] rounded-md">Back to home</button>
        </div>

      </div>
      <Footer />
    </main>
  );
}
