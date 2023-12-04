export default function Allblogpost(props){
    console.log(props)
    return(
        <div className="w-[392px] h-[476px] flex flex-col  border-2 border-slate-300 justify-between rounded-xl p-4 bg-slate-100" >
            <div className="w-[360px] h-[240px]">
                 <img className=" rounded-xl" src={props.BlogImg}></img>
            </div>
            <div className=" ">
            <button className="">{props.status}</button>
         <h3 className="">{props.desc}</h3>
         <p className="">{props.date}</p>
            </div>
        </div>
    )
}