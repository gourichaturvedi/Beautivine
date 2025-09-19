import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Card, List, ListItem, Input } from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import OutsideMenu from "./OutsideMenu";
import styles from "../styles";

export function Menu() {
  const [toggle, setToggle] = useState(false);
  const ref = useRef();

  OutsideMenu(ref, () => {
    setToggle(false);
  });
  
  const toggleMenu = (e) => {
    if (e) {
      e.preventDefault();
    }
    setToggle(prev => !prev);
  };
  
  return (
    <div className="relative" ref={ref}>
      <button
        className="p-2 rounded-lg hover:bg-neutral-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        onClick={toggleMenu}
        aria-label={toggle ? "Close menu" : "Open menu"}
        aria-expanded={toggle}
      >
        {/* Menu Icon */}
        <div className="w-6 h-6 flex flex-col justify-center items-center">
          <span className={`block w-5 h-0.5 bg-neutral-600 transition-all duration-300 ${
            toggle ? 'rotate-45 translate-y-1' : ''
          }`}></span>
          <span className={`block w-5 h-0.5 bg-neutral-600 mt-1 transition-all duration-300 ${
            toggle ? 'opacity-0' : ''
          }`}></span>
          <span className={`block w-5 h-0.5 bg-neutral-600 mt-1 transition-all duration-300 ${
            toggle ? '-rotate-45 -translate-y-1' : ''
          }`}></span>
        </div>
      </button>
      
      {/* Backdrop */}
      {toggle && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={toggleMenu}
        />
      )}
      
      {/* Menu Content */}
      <div
        className={`${
          !toggle ? "opacity-0 invisible translate-y-2" : "opacity-100 visible translate-y-0"
        } absolute top-full right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-neutral-200 z-50 transition-all duration-200 ease-out`}
      >
        <div className="p-6">
          {/* Search */}
          <div className="mb-6">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-neutral-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors duration-200"
              />
            </div>
          </div>
          
          {/* Navigation Links */}
          <nav className="space-y-1">
            {[
              { to: "/Blog", label: "Blog" },
              { to: "/About", label: "About" },
              { to: "/Services", label: "Services" },
              { to: "/Contact", label: "Contact" },
            ].map((link, index) => (
              <NavLink
                key={index}
                to={link.to}
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg transition-colors duration-200 ${
                    isActive
                      ? "bg-primary-50 text-primary-700 font-medium"
                      : "text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
