
import { Menu, X } from "lucide-react";
import { useState } from "react";
function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <section className="sticky top-0 z-50 bg-[#0F0F0F]  h-25">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="text-white text-left mt-4">
                        <a href="#" className="text-[#7456FF] font-semibold lg:text-[24px] text-[16px] font-[Poppins]">Bai<span className="text-white">Haqi</span></a>
                    </div>
  <div className="hidden md:flex items-center gap-7">
    
    <a href="/" className="text-white font-[Poppins] font-semibold text-[20px] hover:text-gray-500 transition duration-300 ease-in-out">Home</a>
    <a href="#hero" className="text-white font-[Poppins] font-semibold text-[20px]  hover:text-gray-500 transition duration-300 ease-in-out">About</a>
    <a href="#projects" className="text-white font-[Poppins] font-semibold text-[20px]  hover:text-gray-500 transition duration-300 ease-in-out">Project</a>
   <a href="#tools" className="text-white font-[Poppins] font-semibold text-[20px]  hover:text-gray-500 transition duration-300 ease-in-out">Tools & Skills</a>
    <a href="#footer" className="text-[#7456FF] font-[Poppins] font-semibold text-[20px] border border-[#7456FF] rounded-lg  px-4 py-4 hover:bg-[#504777]  transition duration-300 ease-in-out ">Contact Me</a>
    
  </div>
    
  <button  className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
   {isOpen ? <X size={28}/> : <Menu size={28}/>}
  </button>
  <div className={`md:hidden absolute top-full left-0 w-full bg-[#0F0F0F] px-4 pb-6 pt-2 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex flex-col gap-4">
          <a href="#" onClick={() => setIsOpen(false)} className="text-white font-[Poppins] font-medium text-[18px] py-2 hover:text-[#7456FF]">Home</a>
          <a href="#" onClick={() => setIsOpen(false)} className="text-white font-[Poppins] font-medium text-[18px] py-2 hover:text-[#7456FF]">About</a>
          <a href="#" onClick={() => setIsOpen(false)} className="text-white font-[Poppins] font-medium text-[18px] py-2 hover:text-[#7456FF]">Project</a>
          <a href="#" onClick={() => setIsOpen(false)} className="text-white font-[Poppins] font-medium text-[18px] py-2 hover:text-[#7456FF]">Blog</a>
          <a href="#" onClick={() => setIsOpen(false)} className="text-center text-[#7456FF] font-[Poppins] font-semibold text-[18px] border border-[#7456FF] rounded-lg py-2.5 hover:bg-[#7456FF] hover:text-white transition duration-300 mt-2">
            Contact Me
          </a>
        </div>
        </div>
 
  
                </div>
            </section>
        </>
    )



}

export default Navbar;