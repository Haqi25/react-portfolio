
import VsCode from '../assets/vscode.png'
import Laravel from '../assets/Laravel.png'
import React from '../assets/programing.png'
import MySQL from '../assets/mysql.png'
import Tailwind from '../assets/tailwind.png'
function Tools(){
    return(
<>
    <section id="tools" className='mt-30'>
       <div className="text-white text-center lg:text-[36px] text-2xl font-[Poppins] font-semibold slide-in-down">
                    <a>Tools and Skills</a>
                </div>
      <div className="mt-2  container grid grid-cols-2 lg:grid-cols-5  py-6 px-11 ml-0 md:ml-16  space-x-4 gap-11 ">
          <div className="bg-[rgb(50,49,49)]  rounded-lg py-6 px-6 flex justify-center slide-in-left  ">
                <img className=' w-12 h-auto md:w-full md:md:max-w-118.5  '  src={Laravel}></img>
          </div>
          <div className="bg-[#323131]  rounded-lg py-6 px-6 flex justify-center slide-in-left ">
                <img className=' w-12 h-auto md:w-full md:md:max-w-118.5 '  src={React}></img>
          </div>
           <div className="bg-[#323131]  rounded-lg py-6 px-6 flex justify-center slide-in-right ">
                <img className=' w-12 h-auto md:w-full md:md:max-w-118.5 '  src={VsCode}></img>
          </div>
           <div className="bg-[#323131]  rounded-lg py-6 px-6 flex justify-center slide-in-right ">
                <img className=' w-12 h-auto md:w-full md:md:max-w-118.5 '  src={Tailwind}></img>
          </div>
           <div className="bg-[#323131] w-25   md:w-full md:h-full  rounded-lg py-8 px-7  md:py-6 md:px-6 md:flex md:justify-center ml-20 md:ml-0  slide-in-right ">
                <img className=' w-12 h-auto md:w-full md:md:max-w-118.5 '  src={MySQL}></img>
          </div>
        
          
      </div>
      
 
    </section>
  
    
    </>

    )
    
}
export default Tools;