const Render = (props)=>{
    return(
        <div className="flex shadow-lg flex-col gap-8 justify-center bg-white rounded-xl sm:p-20 p-5 md:flex-row dark:bg-[#1F2937]">
            <img className="h-[38px] w-[102px] sm:h-16 w-102" src={props.img}/>
             <div className="flex flex-col-reverse gap-4 sm:flex-row">
            <div className=" flex flex-col gap-3">
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