import React from "react";
// import reactLogo from './assets/react.svg'
import viteLogo from "/vite.svg";

const Header = () => {
  return (
    <header className="flex justify-between px-4 py-4 shadow-md md:px-8 ">
      <img src={viteLogo} alt="viteLogo" />
      <ul className="flex gap-4">
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
