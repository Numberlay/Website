
// import '../App.css';
import Temp from './Temp';
import Header from './Header';
import Navbar from './Navbar';
// import Nav from './components/Nav';
import Footer from './Footer';
import { useEffect, useState } from 'react';


function Home({a}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>  
        <Navbar />
        <Header />
        <Temp />
        <div className='hidden md:block mt-[5rem] no-scrollbar' id='contactUs'>
          <iframe className={`border-0 w-[100%] no-scrollbar `} height="630px" src="https://noteforms.com/forms/contact-numberlay-yq6oyz"></iframe>
        </div>
        {/* mobile */}
        <div className='md:hidden mt-[5rem] no-scrollbar' id='contactUs11'>
          <iframe className={`border-0 w-[100%] no-scrollbar `} height="630px" src="https://noteforms.com/forms/contact-numberlay-yq6oyz"></iframe>
        </div>
        <Footer/>
    </>
  );
}

export default Home;
