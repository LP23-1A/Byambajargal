const Render = (props)=>{
    return(
        <div className="flex flex-col gap-8 justify-center bg-white rounded-xl p-20 md:flex-row dark:bg-[#1F2937]">
            <img className="h-16 w-102" src={props.img}/>
             <div className="flex flex-col-reverse gap-4 md:flex-row">
            <div className="renderdesc">
                 <h3>{props.desc}</h3>
            <li>{props.text}</li>
            <li>{props.text}</li>
            <li>{props.text}</li>
            </div>
            <span>{props.date}</span>
            </div>
           
        </div>
    )
}
export default Render