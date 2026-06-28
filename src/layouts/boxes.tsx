import { useEffect } from "react";
function Boxes(){
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
            <section className="mt-10 bg-bg py-20">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

    <div className="bg-[#131313] p-8 rounded-xl border-2 border-dashed border-white hover:border-[#7456FF] hover:-translate-y-2 transition-all duration-300 slide-in-left">
      <p className="text-white text-center font-bold text-5xl font-[Poppins]">03 +</p>
      <p className="text-gray-300 text-center font-[Poppins] mt-2">
        Projects
      </p>
    </div>

    <div className="bg-[#7456FF] p-8 rounded-xl border-2 border-dashed border-white hover:-translate-y-2 transition-all duration-300 slide-in-left">
      <p className="text-white text-center font-bold text-5xl font-[Poppins]">02 +</p>
      <p className="text-center mt-2 font-[Poppins]">
        Clients
      </p>
    </div>
     <div className="bg-[#131313] p-8 rounded-xl border-2 border-dashed border-white hover:border-[#7456FF] hover:-translate-y-2 transition-all duration-300 slide-in-right">
      <p className="text-white text-center font-bold text-5xl font-[Poppins]">07 +</p>
      <p className="text-gray-300 text-center mt-2 font-[Poppins]">
        Months Experience
      </p>
    </div>
    <div className="bg-[#7456FF] p-8 rounded-xl border-2 border-dashed border-white hover:-translate-y-2 transition-all duration-300 slide-in-right">
      <p className="text-white text-center font-bold text-5xl font-[Poppins]">100 %</p>
      <p className="text-center mt-2 font-[Poppins]">
        Commitment
      </p>
    </div>


    
  </div>
</section>
        </>
    )
}

export default Boxes