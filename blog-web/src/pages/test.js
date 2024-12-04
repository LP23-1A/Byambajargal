
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
                 {/* <div className="flex flex-col gap-10 justify-center px-40">
        <p className="px-40 font-bold text-2xl">Trending</p>
        <div className="flex flex-wrap gap-10 justify-center">
          {data.map((el, index) => {
            return (
              <a href={`/info/${el.id}`}>
                <div className="flex gap-10  flex-wrap">
                  <Trending
                    key={index}
                    onClick={() => handleRouter(el.id)}
                    trendImg={`url(${el.social_image})`}
                    status={el.tags}
                    desc={el.title}
                  />
                </div>
              </a>
            );
          })}
        </div>
      </div> */}
        </div>
        
    )
}