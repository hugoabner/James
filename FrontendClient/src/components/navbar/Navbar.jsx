import { Link } from "react-router-dom"
import Logo from "../logo/Logo.jsx"
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { MdNotificationAdd } from "react-icons/md";
// import { sea}

export const Navbar = () => {
  const [open, setOpen] = useState(false);


  return (
    <div className='fixed top-0 left-0 right-0  bg-gray-100 dark:bg-gray-900 py-4 flex items-center px-32  '>
    <div className="ml-4">
      <Logo />
    </div>
  
    <button
      className="md:hidden mr-4 p-2 text-gray-600 dark:text-gray-300"
      onClick={() => setOpen(!open)}
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>
  
    <ul className={`flex-col md:flex md:flex-row  md:gap-5 text-base text-gray-600 dark:text-gray-300 ${open ? 'flex ' : 'hidden '} md:flex`}>
      <li className="hover:text-black ml-10 ">
        <Link to='/'>Home</Link>
      </li>
      <li className="hover:text-black">
        <Link to='/about'>About Us</Link>
      </li>
      <li className="hover:text-black">
        <Link to='/service'>Service</Link>
      </li>
      <li className="hover:text-black">
        <Link to='/contact'>Contact</Link>
      </li>
    </ul>

    <div className="ml-auto flex items-center">
      <BiSearch className="text-gray-600 dark:text-gray-300 mr-4 text-2xl"/>
      <button className="bg-black hover:bg-black text-white font-normal py-1 px-3 hidden md:block ">Post a Job</button>
      <MdNotificationAdd className="text-gray-600 dark:text-gray-300 ml-4 text-2xl mr-4" />
      </div>
      <Logo className="hidden md:block " />
      <span className="ml-2">Logo</span>
  </div> 
  )
}
