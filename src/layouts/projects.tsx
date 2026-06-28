
import image from '../assets/hero.png'
import '../App.css'

function Projects() {
 

  return (
        <>
      <section className="mt-10 py-10 overflow-x-hidden" id="projects " >
        
         <div  className="container mx-auto  py-10 lg:px-0 px-8">
    

    <p className="text-white font-semibold font-[Poppins] lg:text-[36px] text-2xl text-center mb-8 slide-in-down">
      Latest Project
    </p>

 
    <div className=" bg-[#131313] rounded-xl p-6 md:p-9 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center slide-in-down ">
     
      <div className="flex justify-center md:justify-start ">
        <img 
          src={image} 
          alt="Project Preview" 
          className="h-40 w-auto object-contain rounded-lg" 
        />
      </div>
      
  
      <div className="text-center md:text-left mx-20 ">
        <p className="font-[Poppins] font-semibold lg:text-[28px] text-xl text-white leading-tight">
          <span className="text-[#0077BE]">Heri</span> Travel Geronggang
        </p>
      </div>
      
     
      <div className="text-center md:text-right">
        <a 
          href="#" 
          className="inline-block bg-[#7456FF] hover:bg-[#6042E5] transition-colors lg:text-[18px] text-[14px] py-3 px-6 text-white font-[Poppins] font-semibold rounded-lg shadow-md"
        >
          View Details
        </a>
      </div>

    </div>
    

  </div>
   <div className="container mx-auto  py-10 lg:px-0 px-8 slide-in-down">
    
   

 
    <div className="bg-[#131313] rounded-xl p-6 md:p-9 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center ">
     
      <div className="flex justify-center md:justify-start">
        <img 
          src={image} 
          alt="Project Preview" 
          className="h-40 w-auto object-contain rounded-lg" 
        />
      </div>
      
  
      <div className="text-center md:text-left mx-20 ">
        <p className="font-[Poppins] font-semibold lg:text-[28px] text-xl text-white leading-tight">
          <span className="text-[#0077BE]">Heri</span> Travel Geronggang
        </p>
      </div>
      
     
      <div className="text-center md:text-right">
        <a 
          href="#" 
          className="inline-block bg-[#7456FF] hover:bg-[#6042E5] transition-colors lg:text-[18px] text-[14px] py-3 px-6 text-white font-[Poppins] font-semibold rounded-lg shadow-md"
        >
          View Details
        </a>
      </div>

    </div>
    

  </div>
   <div className="container mx-auto  py-10 lg:px-0 px-8 slide-in-down">
    
   

 
    <div className="bg-[#131313] rounded-xl p-6 md:p-9 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center ">
     
      <div className="flex justify-center md:justify-start">
        <img 
          src={image} 
          alt="Project Preview" 
          className="h-40 w-auto object-contain rounded-lg" 
        />
      </div>
      
  
      <div className="text-center md:text-left mx-20 ">
        <p className="font-[Poppins] font-semibold lg:text-[28px] text-xl text-white leading-tight">
          <span className="text-[#0077BE]">Heri</span> Travel Geronggang
        </p>
      </div>
      
     
      <div className="text-center md:text-right">
        <a 
          href="#" 
          className="inline-block bg-[#7456FF] hover:bg-[#6042E5] transition-colors lg:text-[18px] text-[14px] py-3 px-6 text-white font-[Poppins] font-semibold rounded-lg shadow-md"
        >
          View Details
        </a>
      </div>

    </div>
    

  </div>
 
      </section>
        </>
  );
}

export default Projects;