import React from 'react' 
import logo from "../assets/NumberLay.svg"
import logoWBG from "../assets/logoWithoutBG.png"
import coin from "../assets/Coins.svg"
import insta from "../assets/insta.svg"
import facebook from "../assets/facebook.svg"
import linkedin from "../assets/linkedin.svg"
import mail from "../assets/mail.svg"
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer1 = () => {
  return (
    <>
        <div className='mt-[2rem]'>
            <div className='mdx:hidden flex px-[2rem] py-[2rem] mt-[1rem] mx-[1.5vw] slg:mx-[5vw]'>

                <div className='w-[30vw] flex flex-col px-2'>
                    <div className='pt-4' onClick={()=>window.scrollTo(0, 0)}><a href="#/"><img src={logoWBG} alt="" className='h-[2rem]'/></a></div>
                    <div className='mt-[1rem] text-[0.98rem] slg:text-[1.1rem] italic'>Your personalized financial ally</div>
                    <div className='flex mt-2'> 
                        <div className=''> <a href="https://www.instagram.com/numberlay/" target='_blank'> <img src={insta} alt="" className='p-[5px] pl-0'/></a> </div>
                        <div> <a href="https://www.facebook.com/profile.php?id=61555983030441" target='_blank'> <img src={facebook} alt="" className='p-[5px]' /></a> </div>
                        {/* <div> <a href="" target='_blank'> <img src={linkedin} alt="" className='p-[5px]' /></a> </div> */}
                    </div>
                </div>


                <div className='w-[30vw] flex flex-col px-2'>
                    <div className='text-[2rem] font-[500]'>Our Services</div>
                    {/* <div className='hidden md:block text-[2rem] font-[500]'><AnchorLink href="#ourServices">Our Services</AnchorLink></div> */}
                    {/* <div className='md:hidden text-[2rem] font-[500]'><AnchorLink href="#ourServices1">Our Services</AnchorLink></div> */}
                    <div className='text-[0.98rem] slg:text-[1.1rem]'>
                        <ul>
                            <li>Bookkeeping</li>
                            <li>Accounts payable</li>
                            <li>Payroll Management</li>
                            <li>Digital Record Management</li>
                            <li>Business Accounting Setup & Training</li>
                        </ul>
                    </div>
                </div>


                <div className='w-[30vw] flex flex-col px-2'>
                    <div className='p-8'><img src={coin} alt="" className='w-[100%] max-h-[150px]'/></div>
                </div>

            </div>



            <div className='md:hidden flex flex-col w-full '>
                <div className='flex px-[1.2rem] smd:px-[2.3rem]'>
                    <div className='flex flex-col'>
                        <div className='pt-4' onClick={()=>window.scrollTo(0, 0)}><a href="#/"><img src={logoWBG} alt="" className='h-[2rem]'/></a></div>
                        <div className='mt-[0.3rem] text-[0.98rem] text-[#565656] italic'>Your personalized financial ally</div>
                    </div>
                    <div className='flex items-center ml-auto'> 
                        <div className=''> <a href="https://www.instagram.com/numberlay/" target='_blank'> <img src={insta} alt="" className='p-[5px] pl-0'/></a> </div>
                        <div> <a href="https://www.facebook.com/profile.php?id=61555983030441" target='_blank'> <img src={facebook} alt="" className='p-[5px]' /></a> </div>
                        {/* <div> <a href="" target='_blank'> <img src={linkedin} alt="" className='p-[5px]' /></a> </div> */}
                    </div>
                </div>
                <div className='flex flex-col px-[1.2rem] smd:px-[2.3rem] mt-[0.8rem]'>
                    <div className='text-[2rem] font-[500]'>Our Services</div>
                    <div className='text-[1rem]  text-[#565656]'>
                        <ul>
                            <li>Bookkeeping</li>
                            <li>Accounts payable </li>
                            <li>Payroll Management </li>
                            <li>Digital Record Management </li>
                            <li>Business Accounting Setup & Training </li>
                        </ul>
                    </div>
                </div>
            </div>










            
            <div className='bg-blue-50 w-[90vw] h-[3rem] rounded-[2rem] mx-auto mt-[1rem] flex justify-evenly items-center'>
                {/* <div>+1 5666285</div> */}
                <div className='flex'> <img src={mail} alt="" className='mr-2 w-[20px]' /> 
                <a href="mailto:support@numberlaynow.com">support@numberlaynow.com</a></div>
            </div>

            <div className='flex flex-col md:flex-row items-center justify-center text-[0.9rem] my-4 text-[#A2B3FF] '> 
                <div className=' text-center  font-[600] mx-1'>© 2024 Copyright: Numberlay Private Limited</div>
                <div className=' text-center  font-[600] mx-1 underline underline-offset-2'><a href="#/privacy">Privacy policy and Terms of Use</a></div>
            </div>

        </div>
        

    </>
  )
}

export default Footer1