import Photo2 from "../../public/Home/Desktop/Picsagar.png";
import Aboutbutton from "@/components/aboutbutton";
export default function Section2 (){
    return(
        <section className="py-24 px-20  border-3 border-solid border-black bg-gray-100  md: flex md:flex-col md:p-4 dark:bg-[#111827] dark:text-[#D1D5DB] ">
        <div className="flex flex-col gap-16 justify-center items-center">
          <Aboutbutton title="About me"/>
          <div className="flex flex-col gap-24 justify-center items-center md:flex md:flex-row md:p-4">
            <img className="h-[480px] w-[400px] my-8" src={Photo2.src}></img>
            <div className="flex flex-col gap-7">
              <h1>Curius about me? Here you have it:</h1>
              <p className="">I'm a passionate, self-proclaimed designer who specializes
                 in full stack development (React.js & Node.js). I am very 
                 enthusiastic about bringing the technical and visual aspects 
                 of digital products to life. User experience, pixel perfect
                  design, and writing clear, readable, highly performant code 
                  matters to me.</p>
              <p>
              I began my journey as a web developer in 2015, and since then,
               I've continued to grow and evolve as a developer, taking on 
               new challenges and learning the latest technologies along the 
               way. Now, in my early thirties, 7 years after starting my web 
               development journey, I'm building cutting-edge web applications
                using modern technologies such as Next.js, TypeScript, Nestjs, 
                Tailwindcss, Supabase and much more.
              </p>
              <p>
              I am very much a progressive thinker and enjoy working on 
              products end to end, from ideation all the way to development.
              </p>
              <p>When I'm not in full-on developer mode, you can find me
                 hovering around on twitter or on indie hacker, witnessing 
                 the journey of early startups or enjoying some free time.
                  You can follow me on Twitter where I share tech-related 
                  bites and build in public, or you can follow me on GitHub.
              </p>
              <p>Finally, some quick bits about me.</p>
              <div className="flex flex-row gap-10">
              <div className="list">
                <li>B.E. in Computer Engineering</li>
                <li>Full time freelancer</li>
                </div>
                <div className="list">
                <li>Avid learner</li>
                <li>Aspiring indie hacker</li>
                </div>
              </div>
              <p>One last thing, I'm available for freelance work, so feel
                 free to reach out and say hello! I promise I don't bite 😉</p>
            </div>
          </div>
        </div>
      </section>
    )
}