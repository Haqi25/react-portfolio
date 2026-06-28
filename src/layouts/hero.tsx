import { Download } from "lucide-react"
import json from "../assets/carbon (1).png"
import '../App.css'
import { useEffect } from "react";
function Hero(){
    useEffect(() => {
   
    const faders = document.querySelectorAll(
      ".fade-in-section, .slide-in-left, .slide-in-right, .slide-in-down, .slide-in-up"
    );

    const appearOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, appearOptions);

    faders.forEach((fader) => {
      appearOnScroll.observe(fader);
    });

   
    return () => appearOnScroll.disconnect();
  }, []);
    return(
        <>
        <section  className="container mx-auto grid grid-cols-1  lg:grid-cols-2 px-4 py-20 items-center fade-in-section ">
            
            <div className="text-white font-[Poppins] font-semibold lg:text-[36px] text-2xl  ">
                <p className="">Hi There !</p>
               
                <p className="">I am <span className="text-[#7456FF]">Muhammad Baihaqi</span></p>
                  
                  <p className="text-[#999999] text-[20px]">Web Developer</p>
                
                  <p className="">──────────</p>
                  
                  <p className="text-[#999999] text-[14px] lg:text-[16px] text-justify">I'm a Web Developer with a strong interest in building modern, responsive, and user-friendly web applications. I enjoy transforming ideas into functional digital solutions through clean code and thoughtful development practices. I focus on creating scalable, maintainable, and efficient applications while paying close attention to performance, usability, and user experience. Currently, I am continuously improving my skills in front-end and back-end development, exploring modern technologies to build dynamic web and mobile applications.
</p>
                     <div className="flex space-x-4 mt-4  ">
                        <a
                        href="/cv.pdf"
                             className="inline-flex items-center gap-2 lg:text-[20px] text-[14px] bg-[#7456FF] py-4 px-6 rounded-lg  hover:bg-[#7556ff9d] transition duration-300 ease-in-out"
>
                             <Download size={20} />
                                 Download CV
                                    </a>
                        <a href="" className="inline-flex lg:text-[20px] text-[14px] rounded-lg px-6 py-4 border border-[#ffff]  ">More</a> 
                     </div>
            </div>
            <div className="lg:my-4 lg:mx-4 lg:mr-4 lg:mt-0 mt-4" >
    
            <img  src={json}  alt="json" ></img>
            </div>
              
        </section>
        </>
    )
}

export default Hero;