import React from "react";
// import reactLogo from './assets/react.svg'
import viteLogo from "/vite.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between px-4 py-4 shadow-md md:px-8 ">
      <img src={viteLogo} alt="viteLogo" />
      <ul className="flex gap-4">
        <li>
          <NavLink
            className={({ isActive }) => isActive && "underline text-cyan-700"}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => isActive && "underline text-cyan-700"}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => isActive && "underline text-cyan-700"}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
