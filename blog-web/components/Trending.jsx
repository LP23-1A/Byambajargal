export default function Trending (props) {
    return(
        <div className="flex flex-col w-[289px] h-[320px] " >
            <div className="w-[289px] h-[320px] relative ">
                <img src={props.trendImg}></img>
                <div className="flex flex-col gap-4">
            <button>{props.status}</button>
            <p>{props.desc}</p>
        </div>
            </div>
           
        </div>
    )
}