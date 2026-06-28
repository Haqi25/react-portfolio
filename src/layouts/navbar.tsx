
import { Menu } from "lucide-react";
function Navbar(){
    return (
        <>
            <section className="sticky top-0 z-50 bg-[#0F0F0F]  h-25">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="text-white text-left mt-4">
                        <a href="#" className="text-[#7456FF] font-semibold lg:text-[24px] text-[16px] font-[Poppins]">Bai<span className="text-white">Haqi</span></a>
                    </div>
  <div className="hidden md:flex items-center gap-7">
    
    <a href="#" className="text-white font-[Poppins] font-semibold text-[20px] hover:text-gray-500 transition duration-300 ease-in-out">Home</a>
    <a href="#" className="text-white font-[Poppins] font-semibold text-[20px]  hover:text-gray-500 transition duration-300 ease-in-out">About</a>
    <a href="#" className="text-white font-[Poppins] font-semibold text-[20px]  hover:text-gray-500 transition duration-300 ease-in-out">Project</a>
   <a href="#" className="text-white font-[Poppins] font-semibold text-[20px]  hover:text-gray-500 transition duration-300 ease-in-out">Blog</a>
    <a href="#" className="text-[#7456FF] font-[Poppins] font-semibold text-[20px] border border-[#7456FF] rounded-lg  px-4 py-4 hover:bg-[#504777]  transition duration-300 ease-in-out ">Contact Me</a>
    
  </div>
    
  <button className="md:hidden text-white">
    <Menu size={28} />
  </button>
 
  
                </div>
            </section>
        </>
    )



}

export default Navbar;