import Renderskill from "./Renderskill";

const Techstack = (props) => {
  console.log("working");
  return (
    <div className="flex sm:gap-24 p-5 flex-wrap gap-5 sm:flex justify-center sm:flex-wrap">
      {props.data.map((el) => {
        return <Renderskill url={el.url} content={el.content} />;
      })}
    </div>
  );
};
export default Techstack;
