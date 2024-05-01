import { useState } from "react";
import logo from "../assets/logo.png"
import {navItems} from "../constants";
import {X, Menu} from "lucide-react";

const Navbar = () => {

  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const toggleNavbar = () => setMobileSidebarOpen(!mobileSidebarOpen);

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img src={logo} alt="logo" className=" h-10 w-10 mr-2" />
            <span className="text-xl tracking-tight hover:text-amber-400">VirtualR</span>
          </div>
          <ul className="hidden lg:flex ml-14 ">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className=" ml-10 hover:text-amber-400">{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className="py-2 px-3 border rounded-md hover:text-amber-400">Sign In</a>
            <a href="#" className=" bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md hover:text-amber-400">Create and account</a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            {mobileSidebarOpen ? <a href="#" onClick={toggleNavbar} ><X /></a> : <a href="#" onClick={toggleNavbar} > <Menu /></a>  }
          </div>
        </div>
        {mobileSidebarOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 p-12 w-full flex flex-col justify-center items-center lg:hidden">
           <ul>
           {navItems.map((item, index) => (
              <li key={index} className=" my-6 cursor-pointer hover:text-amber-400">
                <a href={item.href} >{item.label}</a>
              </li>
            ))}
           </ul>
           <div className="flex flex-col justify-center space-y-8 items-center">
            <a href="#" className="py-2 px-3 border rounded-md hover:text-amber-400">Sign In</a>
            <a href="#" className=" bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md hover:text-amber-400">Create and account</a>
          </div>
          </div>
        )}
      </div>
    </nav>
  )
}
export default Navbar