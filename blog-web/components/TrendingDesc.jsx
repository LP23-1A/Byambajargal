export default function TrendingDesc(props){
    return(
        <div className="flex flex-col gap-4">
            <button>{props.desc}</button>
            <p>{props.desc}</p>
        </div>
    )
}