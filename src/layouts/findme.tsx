
import {  FaInstagram, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { useEffect } from "react";
function FindMe(){
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
        <div className="container flex lg:justify-end justify-center space-x-7 slide-in-left ">
            <p className="text-white font-[Poppins] lg:text-[20px] text-[12px]">Find Me On</p>
 <a href="https://github.com/Haqi25" className="text-[#7456FF] hover:text-[#7556ff5e] lg:text-[20px] transition duration-300 ease-in-out cursor-pointer"><FaGithub size={23} /></a>
 <a href="https://wa.me/62895629540686" className="text-[#7456FF] hover:text-[#7556ff5e]  transition duration-300 ease-in-out cursor-pointer"><FaInstagram size={23} /></a>
 <a href="" className="text-[#7456FF] hover:text-[#7556ff5e]  transition duration-300 ease-in-out cursor-pointer"><FaWhatsapp size={23} /></a>
 <a className="text-[#7456FF] hover:text-[#7556ff5e]  transition duration-300 ease-in-out cursor-pointer"><FaLinkedin size={23} /></a>
        </div>
        </> 
    )
}

export default FindMe