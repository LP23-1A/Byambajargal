import Icon from "../../public/Home/Desktop/Icon.png";
import icon1 from "../../public/Home/Desktop/icon-dot-emerald-500dot.png";
import photo from "../../public/Home/Desktop/Pic.png";
import IconContainer from "@/components/IconContainer";
export default function Section1() {
  return (
    <section className=" relative flex p-24 gap-20 flex-col-reverse md:flex md:flex-row md:p-4 md:bg-transparent dark:bg-gray-950">
      <div className=" flex gap-10 flex-col p-5 dark:text-slate-50 ">
        <h1 className="dark:text-[#D1D5DB]">Hi , I'm Byambajargal</h1>
        <p className="md:auto dark:text-[#D1D5DB]">
          I'm a full stack developer (React.js & Node.js) with a focus on
          creating (and occasionally designing) exceptional digital experiences
          that are fast, accessible, visually appealing, and responsive. Even
          though I have been creating web applications for over 7 years, I still
          love it as if it was something new.
        </p>
        <div className="flex gap-10 flex-col">
          <div className="flex flex-col gap-3">
            <div className="flex gap-3 dark:text-[#D1D5DB]">
              <img src={Icon.src}></img>
              Ulaanbaatar,Mongolia
            </div>
            <div className="flex gap-3 items-center dark:text-[#D1D5DB]">
              <img className="h-2 w-2" src={icon1.src}></img>
              Available for new project
            </div>
          </div>
          <div>
            <IconContainer></IconContainer>
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center h-[320px] min-w-[280px]">
        <img
          className=" md:flex md:justify-center md:items-center p-2  dark:bg-[#374151] z-10"
          src={photo.src}
        ></img>
      </div>
      <div  className="h-[300px] min-w-[270px] bg-[#D1D5DB] top-[13%] right-[30%] absolute md:right-0 md:top-12" >
    </div>
    </section>
  );
}
