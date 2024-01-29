import React from 'react'
import one from "../assets/1.svg"
import lines from "../assets/lines.svg"
import AnchorLink from "react-anchor-link-smooth-scroll";

const Header = () => {
  return (
    <>
        <div className='flex justify-center smmx:mx-[1vw] mx-[3vw] mt-[6.5rem]' id='header'>
        {/* <div className='flex justify-center smmx:mx-[1vw] mx-[3vw] mt-[7rem]'> */}
            <div className='flex flex-col smmx:px-[0.8rem] px-[1rem] font-[400]'>
                <div className='hidden 420x:block text-[2.25rem] leading-[3rem]'>Your Personalized</div>
                <div className='420x:hidden smdx:text-[2rem] smdx:leading-[2.25rem] 900x:text-[2.75rem] 900x:leading-[3rem] text-[3.2rem] leading-[3.75rem]'>Your Personalized</div>


                <div className='hidden 420x:block text-[2.25rem] leading-[3rem]'><span className='text-blue-600'>Accounting Partner</span> <span className=''>for</span> </div>
                <div className='420x:hidden smdx:text-[1.5rem] smdx:leading-[2rem] 900x:text-[2.75rem] 900x:leading-[3rem] text-[3.2rem] leading-[3.75rem]'><span className='text-blue-600'>Accounting Partner</span> <span className=''>for</span> </div>
                {/* <div className=' smdx:text-[1.5rem] smdx:leading-[2rem] 900x:text-[2.75rem] 900x:leading-[3rem] text-[3.2rem] leading-[3.75rem]'><span className='text-blue-600'>Accounting Partner</span> <span className=''>for</span> </div> */}



                <div className='hidden 420x:block text-[2.25rem] leading-[3rem]'>Business Growth</div>
                <div className='420x:hidden smdx:text-[2rem] smdx:leading-[2.25rem] 900x:text-[2.75rem] 900x:leading-[3rem] text-[3.2rem] leading-[3.75rem]'>Business Growth</div>



                <div className='w-[100%] 900x:max-w-[500px] max-w-[530px]'><img src={lines} alt="" className='w-[70%]'/></div>
                
                <div className='mt-[1.5rem] text-[1.25rem] md:w-[60vw]'>Unlock financial clarity and drive growth for your business with our personalized bookkeeping, payroll, and digital recordkeeping services. Let us take the stress out of managing your finances so you can focus on what matters most – running your business.</div>

                {/* <button className='text-white mx-5 bg-blue-600 px-4 py-2 md:py-3 rounded-[4rem]'><AnchorLink href="#contactUs">Contact Us</AnchorLink> </button>
                <button className='text-white mx-1 my-auto smdx:text-[0.95rem] bg-blue-600 px-4 py-1 rounded-[4rem]'><AnchorLink href="#contactUs11">Contact Us</AnchorLink> </button> */}


                <div className='hidden md:block mdx:mx-auto mt-[1.5rem] text-[1rem]'><button className='text-white bg-blue-600 mx-5 px-4 py-2 md:py-3 rounded-[4rem]'><AnchorLink href="#ourServices">Our Services</AnchorLink> </button></div>
                <div className='md:hidden mdx:mx-auto mt-[1.5rem] text-[1rem]'><button className='text-white mx-1 my-auto smdx:text-[0.95rem] bg-blue-600 px-4 py-1 rounded-[4rem]'><AnchorLink href="#ourServices">Our Services</AnchorLink> </button></div>
            </div>
            <div className='mdx:hidden'><img src={one} alt="" className='mdx:hidden w-full max-w-[600px] min-w-[250px]'/></div>
        </div>
    </>
  )
}

export default Header