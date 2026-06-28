import { Rocket, Cpu, Shuffle, ShieldCheck } from 'lucide-react';
function HireMe(){
    return(
        <>
            <section id="hireme" className="mt-30 ">
                 
                <div className="text-white text-center lg:text-[36px] text-2xl font-[Poppins] font-semibold slide-in-down ">
                    <a>Why Hire Me</a>
                </div>
                <div className="mt-2 grid grid-cols-1  lg:grid-cols-4  py-6 px-6  ">
                   
                    <div className="flex flex-col  items-center justify-center py-30 px-30  ">
                        <div className="border border-gray-500 rounded-full  px-4 py-4">
                            <div className="bg-[#7556ff6c] rounded-full w-49.5 h-49.5  flex items-center justify-center  border-[#7456FF]">
                           <a className="text-[#7456FF]"><Rocket size={100}/></a>
                            </div>
                            <div>

                            </div>
                            
                        </div>
                        <div className="mt-4 text-white font-semibold font-[Poppins] text-[28px] slide-in-left">
                            <p className="text-center">Proactive</p>
                            <p className="text-[#999999] font-[Poppins] text-[16px] text-justify">I don’t just wait around for instructions. I always take the initiative to find productive ways to contribute, optimize existing code, and tackle the backlog before being asked.</p>
                        </div>
                        
                    </div>
                    <div className="flex flex-col  items-center justify-center py-30 px-30 slide-in-left  ">
                        <div className="border border-gray-500 rounded-full  px-4 py-4">
                            <div className="bg-[#7556ff6c] rounded-full w-49.5 h-49.5  flex items-center justify-center  border-[#7456FF]">
                           <a className="text-[#7456FF]"><Cpu size={100}/></a>
                            </div>
                            <div>

                            </div>
                            
                        </div>
                        <div className="mt-4 text-white font-semibold font-[Poppins] text-[28px] ">
                            <p className="text-center">Autonomous</p>
                            <p className="text-[#999999] font-[Poppins] text-[16px] text-justify">I can’t just stand around doing nothing. I always find productive ways to contribute, optimize code, and push the project forward without needing to be pushed.</p>
                        </div>
                        
                    </div>
                    <div className="flex flex-col  items-center justify-center py-30 px-30 slide-in-right  ">
                        <div className="border border-gray-500 rounded-full  px-4 py-4">
                            <div className="bg-[#7556ff6c] rounded-full w-49.5 h-49.5  flex items-center justify-center  border-[#7456FF]">
                           <a className="text-[#7456FF]"><Shuffle size={100}/></a>
                            </div>
                            <div>

                            </div>
                            
                        </div>
                        <div className="mt-4 text-white font-semibold font-[Poppins] text-[28px] ">
                            <p className="text-center">Adaptive</p>
                            <p className="text-[#999999] font-[Poppins] text-[16px] text-justify">Tech stacks and requirements change, and I change with them. I learn fast and adapt quickly to new frameworks or sudden project shifts without losing momentum.</p>
                        </div>
                        
                    </div>

                    <div className="flex flex-col  items-center justify-center py-30 px-30  slide-in-right  ">
                        <div className="border border-gray-500 rounded-full  px-4 py-4">
                            <div className="bg-[#7556ff6c] rounded-full w-49.5 h-49.5  flex items-center justify-center  border-[#7456FF]">
                           <a className="text-[#7456FF]"><ShieldCheck size={100}/></a>
                            </div>
                            <div>

                            </div>
                            
                        </div>
                        <div className="mt-4 text-white font-semibold font-[Poppins] text-[28px] ">
                            <p className="text-center">Quality-Driven</p>
                            <p className="text-[#999999] font-[Poppins] text-[16px] text-justify">I write code that lasts, not just code that works. I focus on clean structure, security, and maintainability so that the system is always ready to scale.</p>
                        </div>
                        
                    </div>
                    

                </div>
            </section>
        </>
    )

}

export default HireMe