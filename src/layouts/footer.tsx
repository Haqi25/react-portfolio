
import {Phone, Mail, MapPinHouse} from 'lucide-react'
function footer(){
    return(
        <>
            <section id="footer" className="mt-30 bg-[#131313] fade-in-section">
                       
                <div className="container flex flex-col py-4 px-4 md:px-12 md:py-12    ">
                    <p className="text-white text-2xl md:text-[36px] font-[Poppins] font-semibold">Get in Touch</p>
                    <p className="text-[#999999] font-[Poppins] text-[16px] mt-4">For business and partnership inquiry please contact me below!</p>
                    <div className="grid grid-cols-1">
                        <div className='flex space-x-2 mt-4 '>
                            <a className='text-white border border-[#ffff] rounded-full  py-4 px-4  '><Mail/></a>
                            <div className='flex flex-col ml-4'>
                                <a className='text-[#999999] font-[Poppins]'>Email</a>
                                 <a className='text-white font-[Poppins] text-[16px]'>muhammadbaihaqi1401@gmail.com</a>
                            </div>
                            
                            
                        </div>
                         <div className='flex space-x-2 mt-4 '>
                            <a className='text-white border border-[#ffff] rounded-full  py-4 px-4  '><Phone/></a>
                            <div className='flex flex-col ml-4'>
                                <a className='text-[#999999] font-[Poppins]'>Phone/Whatsapp</a>
                                 <a className='text-white font-[Poppins] text-[16px]'>0895629540686</a>
                            </div>
                            
                            
                        </div>
                         <div className='flex space-x-2 mt-4 '>
                            <a className='text-white border border-[#ffff] rounded-full  py-4 px-4  '><MapPinHouse/></a>
                            <div className='flex flex-col ml-4'>
                                <a className='text-[#999999] font-[Poppins]'>Address</a>
                                 <a className='text-white font-[Poppins] text-[16px]'>Jl.Sekolahan, Genengan, Pakisaji</a>
                                 
                            </div>
                               <div className='hidden md:flex flex-col  text-end ml-auto'>
                                <a href='https://www.figma.com/design/8QykmnbAFqJpXkvJ6qvj4m/Personal-Portofolio-Web-Design--FREE---Community-?node-id=1-5&t=pDFfpv8lswFiuxG5-1' className='text-white font-[Poppins] font-semibold text-[16px]'>UI Design:<span className='text-[#7456FF] font-semibold font-[Poppins]'> Dimas Ardiansyah (CC BY 4.0)</span></a>
                                 <a className='text-white font-[Poppins] font-semibold text-[16px]'>Front-end Implementation: <span className='text-[#7456FF] font-semibold font-[Poppins]'>Muhammad Baihaqi</span></a>
                                 
                            </div>
                           {/* <div className='flex flex-col  text-[16px] text-white font-semibold font-[Poppins] ml-auto text-end'>
                        <a>UI Design: Dimas Ardiansyah (CC BY 4.0)</a>
                        
                        
                    </div>
                     */}


                            
                        </div>
                   <div className='flex space-x-2 mt-4 lg:hidden '>
                             <a href='https://www.figma.com/design/8QykmnbAFqJpXkvJ6qvj4m/Personal-Portofolio-Web-Design--FREE---Community-?node-id=1-5&t=pDFfpv8lswFiuxG5-1' className='text-white font-[Poppins] font-semibold text-[16px]'>UI Design:<span className='text-[#7456FF] font-semibold font-[Poppins]'> Dimas Ardiansyah (CC BY 4.0)</span></a>
                                 <a className='text-white font-[Poppins] font-semibold text-[16px]'>Front-end Implementation: <span className='text-[#7456FF] font-semibold font-[Poppins]'>Muhammad Baihaqi</span></a>
                   </div>
                    </div>
                </div>
            </section>
        </> 
    )
} export default footer