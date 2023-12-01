import ProjectRender from "./ProjectRender";
const { default: Aboutbutton } = require("./aboutbutton");

const Section5 = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-10 p-1 sm:px-60 dark:text-[#D1D5DB]">
      <Aboutbutton title="Work" />
      <p>Some of the noteworthy projects I have built:</p>
      <ProjectRender />
    </div>
  );
};
export default Section5;
