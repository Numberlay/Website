import { useState, useRef, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Link, useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { logOut } from "../../store/slices/UserSlice";
// import NavLinks from "./NavLinks";
// import { IoMdMenu } from "react-icons/io";
// import { RxCross2 } from "react-icons/rx";
// import logo from "../../assets/img/logo1.jpg";
// import { FaAngleUp, FaAngleDown } from "react-icons/fa6";

const Navbar = () => {
  const [heading, setHeading] = useState("");
  //   const user = useSelector((state) => state.user);
  // console.log("user:", user.userData.userName);
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleLogout = () => {
    console.log("logout");
    // dispatch(logOut());
    // navigate("/");
  };

  // Calculate total quantity in the cart
  const totalQuantity = 2;

  let headerWidth = useRef();

  const handleScroll = () => {
    console.log(headerWidth);
    if (window.scrollY >= 20) {
      headerWidth.current.classList.add("sticky");
      headerWidth.current.classList.remove("rounded-navbar");
    } else {
      headerWidth.current.classList.add("rounded-navbar");
      headerWidth.current.classList.remove("sticky");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      {/* <div className=" ml-8 gap-3 flex justify-around text-gray-800">
        <p className="head-wel justify-start  hover:text-red-400">
          Simsun Electric Pvt Ltd
        </p>
        <p className=" hover:text-red-400">
          Call Us: <a href="tel:+007 9089 6767">+007 9089 6767</a>
        </p>
        <p className=" hover:text-red-400">
          E-mail:{" "}
          <a href="mailto:simsunelectricwork@gmail.com" id="T9">
            simsunelectricwork@gmail.com
          </a>
        </p>
      </div> */}

      <div className="bg-red-100">
        <nav
          ref={headerWidth}
          className="bg-[#161D24] text-white  w-full h-20 opacity-100 top-0 fixed z-20"
        >
          <div className="flex items-center font-medium justify-between ">
            <div className="z-50 p-1 md:w-auto w-full flex justify-between mr-[2rem] -ml-10">
              {/* <Link
                to="/"
                className="flex text-3xl  border md:translate-x-10  justify-center items-center ml-10   overflow-hidden font-medium mb-0 md:mb-0 mr-0 "
              >
                <div className="flext justify-start   ">
                  <img src='' alt="" className="w-12" />
                </div>
              </Link> */}
              logooooooo
              <div
                className="text-3xl md:hidden mt-3.5 z-30"
                onClick={() => setOpen(!open)}
              >
                {open
                  ? //   <RxCross2 className="z-50" />
                    "cross "
                  : //   <IoMdMenu className="z-50" />
                    "three lines"}
              </div>
            </div>



            <ul className="md:flex md:flex-row md:flex-wrap md:mt-[1rem] md:mb-[1rem] hidden items-center gap-3 font-[Poppins] mx-8">
              <div className="">
                <li>
                  home
                  {/* <Link
                    to="/"
                    className="ml-2 text-xl cursor-pointer text-white hover:text-red-400 font-medium mr-3.5"
                  >
                    Home
                  </Link> */}
                </li>
              </div>
              {/* <NavLinks /> */}
              <div className="">
                <li>
                  {/* <Link
                    to="/shop"
                    className="ml-2 text-xl cursor-pointer text-white hover:text-red-400 font-medium mr-3.5"
                  >
                    Shop
                  </Link> */}
                  shop
                </li>
              </div>

              
            </ul>




            {/* Mobile nav */}
            <ul
              className={`z-20 md:hidden bg-[#161D24] fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4 duration-500 ${open ? "left-0" : "left-[-100%] "}`}
            >
              <div className="">
                {/* <Link
                  to="/"
                  className="ml-5 cursor-pointer text-xl text-white hover:text-red-400 font-semibold "
                  onClick={() => setOpen(!open)}
                >
                  Home
                </Link> */}
                home
              </div>
              <div className="">
                {/* <Link
                  to="/"
                  className="ml-5 cursor-pointer text-xl text-white hover:text-red-400 font-semibold "
                  onClick={() => setOpen(!open)}
                >
                  Home
                </Link> */}
                home
              </div>
            </ul>

            
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
