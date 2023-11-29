import ProjectRender from "./ProjectRender";
const { default: Aboutbutton } = require("./aboutbutton");

const Section5 = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-16 py-24 px-20 dark:text-[#D1D5DB]">
      <Aboutbutton title="Work" />
      <p>Some of the noteworthy projects I have built:</p>
      <ProjectRender />
    </div>
  );
};
export default Section5;
