export default function Fill (){
    return(
        <div className="flex flex-col p-10 rounded-xl bg-[#F6F6F7] gap-10">
      <p className="font-bold text-2xl">Leave message</p>
      <div className="flex gap-10">
        <input className="rounded-md border-2 border-[#696A75]" placeholder="Your Name"/>
        <input className="rounded-md border-2 border-[#696A75]" placeholder="Your Email"/>
      </div>
      <input className="rounded-md  border-2 border-[#696A75]" placeholder="Write message"/>
      <button className="bg-[#4B6BFB] text-slate-50 w-fit h-fit rounded-xl p-3">Send Message</button>
    </div>
    )
    
}