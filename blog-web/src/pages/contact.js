import Adress from "@/components/Adress";
import Fill from "@/components/Fill";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function contact() {
  return (
    <main>
      <Navbar />
      <div className="flex flex-col gap-10 m-auto py-20 px-20] bg-slate-50 w-full justify-center items-center">
        <div className="flex flex-col justify-center gap-5 ">
          <p className="font-bold text-4xl ">Contact Us</p>
          <p className="w-[ w-[642px] text-[#696A75]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam
          </p>
        </div>
        <div className="flex gap-[50px]">
            <Adress
            title="Address"
            info="1328 Oak Ridge Drive, Saint Louis, Missouri"
            />
            <Adress
            title="Contact"
            info="313-332-8662
            info@email.com"
            />
        </div>
         <Fill/>
      </div>
      <Footer />
    </main>
  );
}
