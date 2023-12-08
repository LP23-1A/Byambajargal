
import { useRef, useState } from "react"
 import axios from "axios"
 
export default function test() {
     const [data, setData]=useState({published:true})
    const handlerInputValue = (e, objectKey) => {
        let mock ={}
        if(objectKey === "tags"){
            objectKey=[e.target.value]
        }else{
            objectKey=e.target.value
        }
        setData(...data, ...mock)
    }    
    console.log(data);
   const sendRequest = async () =>{
   let response = await axios.post("https://dev.to/api/articles", data)
   }
    return(
        <div className="flex justify-center items-center p-30 flex-col gap-10 h-screen" >
            <input onChange={ (e) => handlerInputValue.apply(e, "title")} placeholder="title"></input>
            <input onChange={(e) => handlerInputValue.apply(e, "description")} placeholder="description"></input>
            <input onChange={(e) => handlerInputValue.apply(e, "tags")} placeholder="tags"></input>
            <input onChange={(e) => handlerInputValue.apply(e, "series")} placeholder="series"></input>
            <button className="rounded-xl bg-red-200 w-fit p-2">Add</button>
        </div>
    )
}