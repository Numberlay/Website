import React, { useEffect } from 'react'
import Navbar1 from './Navbar1';
import Footer1 from './Footer1';

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
        <Navbar1 />
        <div className='flex flex-col mt-[7rem] px-[2rem]'>
            <div className='text-[1.5rem] md:text-[2rem] slg:text-[2.5rem] font-[700] text-center'>Privacy Policy and Terms of Use</div>
            <div className=' mt-[1rem]'>Thank you for visiting Numberlay. This Privacy Policy outlines how we collect, use, and protect your personal information when you interact with our website and services. Your privacy is of utmost importance to us, and we are committed to safeguarding your personal information. Please read this policy carefully to understand our practices.</div>

            <div className='font-[600] md:text-[1.15rem] slg:text-[1.3rem] mt-[2rem] '>Information We Collect:</div>
            <div>Personal Information: When you visit our website or use our services, we may collect personal information that you provide voluntarily, such as your name, email address, phone number, and other contact details. We may also collect other information that you choose to share with us, such as your business information or preferences.</div>

            <div className='font-[600] md:text-[1.15rem] slg:text-[1.3rem] mt-[2rem]'>Automatically Collected Information: </div>
            <div>We may also collect certain information automatically when you interact with our website or services. This information may include your IP address, device type, browser type, operating system, and browsing behavior on our website.</div>

            <div className='font-[600] md:text-[1.15rem] slg:text-[1.3rem] mt-[2rem]'>Use of Collected Information:</div>
            {/* <div> */}
              <ul className='list-disc pl-[2rem]'>
                <li>Providing Services: We use the collected information to provide and improve our services to you, including bookkeeping, accounting, and related financial services.</li>
                <li>Communication: We may use your contact information to communicate with you regarding our services, respond to your inquiries, and provide customer support.</li>
                <li>Personalization: We may use the collected information to personalize your experience on our website and tailor our services to better meet your needs.</li>
                <li>Marketing: With your consent where required by law, we may use your information to send you promotional materials, newsletters, or other marketing communications about our products and services.</li>
              </ul>
            {/* </div> */}

            <div className='font-[600] md:text-[1.15rem] slg:text-[1.3rem] mt-[2rem]'>Data Security: </div>
            <div>We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, or alteration. However, please note that no method of transmission over the internet or electronic storage is entirely secure, and we cannot guarantee the absolute security of your data.</div>

            <div className='font-[600] md:text-[1.15rem] slg:text-[1.3rem] mt-[2rem]'>Google Analytics: </div>
            <div>It is used to enhance user experience, and we do not collect your personally identifiable information. The data it collects is related to the device/browser, IP address, and on-site activities to measure and report statistics about your interactions on the web. To get knowledge about how Google Analytics deals with your data, check their privacy policy here.</div>

            <div className='font-[600] md:text-[1.15rem] slg:text-[1.3rem] mt-[2rem]'>Cookies and Tracking Technologies: </div>
            <div>We may use cookies and similar tracking technologies to enhance your browsing experience on our website. You can adjust your browser settings to refuse cookies, but this may limit certain functionalities on our site.</div>

            <div className='font-[600] md:text-[1.15rem] slg:text-[1.3rem] mt-[2rem]'>Your Choices: </div>
            <div>You have the right to access, correct, update, or delete your personal information stored with us. If you wish to exercise any of these rights or have any questions about our privacy practices, please contact us using the information provided below.</div>

            <div className='font-[600] md:text-[1.15rem] slg:text-[1.3rem] mt-[2rem]'>Changes to the Privacy Policy: </div>
            <div>We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. The revised policy will be posted on our website, and the “Effective Date” at the top will indicate when the changes come into effect.</div>

            <div className='font-[600] md:text-[1.15rem] slg:text-[1.3rem] mt-[2rem]'>Contact Us: </div>
            <div>If you have any questions or concerns about our Privacy Policy or the handling of your personal information, please contact us at: <a href="mailto:support@numberlaynow.com" className='underline'> support@numberlaynow.com</a> By using our website or services, you signify your acceptance of this Privacy Policy. If you do not agree with the practices outlined in this policy, please refrain from using our website or services.</div>


        </div>
        <Footer1 />
    </>
  )
}

export default Terms