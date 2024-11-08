import React from "react";
import { useGlobalContext } from "../context";
import { FaBars } from "react-icons/fa";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const { openSidebar } = useGlobalContext();
  return (
    <nav className="nav-center">
      <h3 className="logo">strapi</h3>
      <button className="toggle-btn" onClick={openSidebar}>
        <FaBars />
      </button>
      {/* nav links later  */}
      <NavLinks />
    </nav>
  );
};

export default Navbar;
