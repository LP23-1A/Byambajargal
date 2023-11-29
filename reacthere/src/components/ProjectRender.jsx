import Project from "./Project";
const data3 = [
  {
    pic: "https://s3-alpha-sig.figma.com/img/13a1/57f2/d0bfafa5cbd6a89dfe634a542f95ebd2?Expires=1701648000&Signature=qBth9sqImCFsPd1BsOGncM-miU3MyvwhVcxk1MzE1Auk9Xt2dBxUqpqrvmz9lM5Q1gTFA7MgbbbqBzOn4l12AU83a-bh~qrRImi198t68axRZ7Z25qnNIBbwMZSP14Hg7bn~iKEELMkRFMw50s6xgHbbH9xpMfgeItKInBg67GqxLkI8MVjyenvU6~PEtqd7CX-ig~wdaSoQsT8qwHY-04ApM9lyd64oGgHojgygyDhHr7KKtGc2EsTPgFLEcQrtY8GeP8V33KUhEUn3WuLar8XWgjgDQtr~6vOQIh8SiFY-kAQ3P-kPmhOeunqRatY99DefER2-6c0-XyL4wyQd0g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Fiskill",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    // tool:{Utilities},
    icon: "https://cdn-icons-png.flaticon.com/512/7794/7794669.png",
  },
  {
    title: "Fiskill",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    // tool:{Utilities},
    icon: "https://cdn-icons-png.flaticon.com/512/7794/7794669.png",
    pic: "https://s3-alpha-sig.figma.com/img/13a1/57f2/d0bfafa5cbd6a89dfe634a542f95ebd2?Expires=1701648000&Signature=qBth9sqImCFsPd1BsOGncM-miU3MyvwhVcxk1MzE1Auk9Xt2dBxUqpqrvmz9lM5Q1gTFA7MgbbbqBzOn4l12AU83a-bh~qrRImi198t68axRZ7Z25qnNIBbwMZSP14Hg7bn~iKEELMkRFMw50s6xgHbbH9xpMfgeItKInBg67GqxLkI8MVjyenvU6~PEtqd7CX-ig~wdaSoQsT8qwHY-04ApM9lyd64oGgHojgygyDhHr7KKtGc2EsTPgFLEcQrtY8GeP8V33KUhEUn3WuLar8XWgjgDQtr~6vOQIh8SiFY-kAQ3P-kPmhOeunqRatY99DefER2-6c0-XyL4wyQd0g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    pic: "https://s3-alpha-sig.figma.com/img/13a1/57f2/d0bfafa5cbd6a89dfe634a542f95ebd2?Expires=1701648000&Signature=qBth9sqImCFsPd1BsOGncM-miU3MyvwhVcxk1MzE1Auk9Xt2dBxUqpqrvmz9lM5Q1gTFA7MgbbbqBzOn4l12AU83a-bh~qrRImi198t68axRZ7Z25qnNIBbwMZSP14Hg7bn~iKEELMkRFMw50s6xgHbbH9xpMfgeItKInBg67GqxLkI8MVjyenvU6~PEtqd7CX-ig~wdaSoQsT8qwHY-04ApM9lyd64oGgHojgygyDhHr7KKtGc2EsTPgFLEcQrtY8GeP8V33KUhEUn3WuLar8XWgjgDQtr~6vOQIh8SiFY-kAQ3P-kPmhOeunqRatY99DefER2-6c0-XyL4wyQd0g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Fiskill",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    // tool:{Utilities},
    icon: "https://cdn-icons-png.flaticon.com/512/7794/7794669.png",
  },
];
const ProjectRender = () => {
  return data3.map((el, idx) => {
    return (
      <div>
        <Project
          positionReverse={idx % 2 === 0}
          img={el.pic}
          title={el.title}
          desc={el.desc}
          icon={el.icon}
        />
      </div>
    );
  });
};
export default ProjectRender;
