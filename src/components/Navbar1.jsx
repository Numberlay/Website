import React, { useEffect, useState } from 'react'
import logo from '../assets/NumberLay.svg'
import logoWBG from '../assets/logoWithoutBG.png'
import three from '../assets/threeLines.svg'
import cross from '../assets/cross.png'
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar1 = () => {


  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      console.log(currentScrollPos, "-----------")
      if (currentScrollPos<50 || prevScrollPos > currentScrollPos) {
        setIsNavbarVisible(false);
        // setIsNavbarVisible(true);
      } else {
        setIsNavbarVisible(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);




  return (
    <>

        <div className={`fixed top-0 w-full bg-white navbar ease-in-out transition-all duration-900 ${isNavbarVisible ? 'top-[-100px]' : 'top-0'}`} id='navbar'>
          <nav className='py-[0.5rem] px-[1rem] smd:px-[1.5rem] md:px-[2.5rem] flex justify-between top-0 z-[1000] mt-1 md:mt-0'>
              <div className='smdx:w-[120px] w-[12vw] my-auto min-w-[150px]' ><a href="#/"><img src={logoWBG} alt="NumberLay" className='w-full'/></a></div>
              <div className='hidden md:block'>
                  <button className='mx-5'><a href="#/" >Services</a> </button>
                  
                  <button className='text-white mx-5 bg-blue-600 px-4 py-2 md:py-3 rounded-[4rem]'><a href="#/" >Contact Us</a> </button>
              </div>
              <div className='md:hidden flex flex-col'>
                  {/* <button className='mx-1 smdx:text-[0.95rem]'><a href="">Services</a> </button> */}
                  
                  <button className='text-white mx-1 my-auto smdx:text-[0.95rem] bg-blue-600 px-4 py-1 rounded-[4rem]'><a href="#/">Contact Us</a> </button>
              </div>
          </nav>
        </div>





    </>
  )
}

export default Navbar1