export default function Adress(props){
    return(
        <div className="w-[294px] h-[133px] rounded-xl border-2 border-[#696A75] p-4">
            <p className="font-bold text-2xl p-2">{props.title}</p>
            <p className="text-[#696A75]">{props.info}</p>
        </div>
    )
}