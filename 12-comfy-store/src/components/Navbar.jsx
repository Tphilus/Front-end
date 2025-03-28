// import React, { useEffect, useState } from "react";
import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";

// const themes = {
//   winter: "",
//   dracula: "",
// };

// const getThemeFromLocalStorage = () => {
//   return localStorage.getItem('theme') || themes.winter
// }

const Navbar = () => {
  // const [theme, setTheme] = useState(getThemeFromLocalStorage());
  // const handleTheme = () => {
  //   const { winter, dracula } = themes;
  //   const newTheme = theme === winter ? dracula : winter;
  //   document.documentElement.setAttribute("data-theme", theme);
  //   setTheme(newTheme);
  // };

  // useEffect(() => {
  //   document.documentElement.setAttribute("data-theme", theme);
  //   localStorage.setItem("theme", theme);
  // }, [theme]);
  return (
    <nav className=" bg-base-200">
      <div className="navbar align-element">
        <div className="navbar-start">
          {/* TITLE  */}
          <NavLink
            to="/"
            className="hidden lg:flex font-bold text-primary italic text-3xl items-center"
          >
            Comfy
          </NavLink>
          {/* DROPDOWN  */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className=" h-6 w-6" />
            </label>
            <ul className="menu menu-sm dropdown-content mt-3 z[1] p-2 shadow bg-base-200 rounded-box w-52">
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          {/* THEME SETUP */}
          <label className=" swap swap-rotate">
            <input type="checkbox"
            //  onChange={handleTheme}
              />
            {/* SUN ICON  */}
            <BsSunFill className=" swap-on h-4 w-4" />
            {/* MOON ICON  */}
            <BsMoonFill className=" swap-off h-4 w-4" />
          </label>
          {/* CART LINK */}
          <NavLink to="/cart" className="btn btn-ghost btn-circle btn-md ml-4">
            <div className="indicator">
              <BsCart3 className=" h-6 w-6" />
              <span className="badge badge-sm badge-primary indicator-item  ">
                8
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
