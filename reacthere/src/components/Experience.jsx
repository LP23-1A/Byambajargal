import Render from "./Render"

const data2 =[
    {
        img:"https://logos-world.net/wp-content/uploads/2021/04/Upwork-Logo-1.png",
        desc:"Sr. Frontend Developer ",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date:"Nov 2021 - Present"
    },
    {
        img:"https://logos-world.net/wp-content/uploads/2021/04/Upwork-Logo-1.png",
        desc:"Team Lead",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date:"Jul 2017 - Oct 2021"
    },
    {
        img:"https://logos-world.net/wp-content/uploads/2021/04/Upwork-Logo-1.png",
        desc:"Full Stack developer",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date:" Dec 2015 - May 2017"
    },
]
const Experience = () => {
    return(
       data2.map((el) => {
        return <Render img={el.img} desc={el.desc} text={el.text} date={el.date}/>
       })
    )
}
export default Experience