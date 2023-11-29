
const Contactme = (props) => {
    return(
        <div className="flex flex-row gap-12 items-center">
        <img className="h-10 w-10" src={props.img}/>
        <p>{props.email}</p>
        <img className="h-10 w-10" src={props.image}/>
    </div>
    )
}
export default Contactme