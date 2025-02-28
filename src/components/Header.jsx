import React, { useState } from "react";
import viteLogo from "/vite.svg";
import { NavLink } from "react-router-dom";
import Modal from "./Modal";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between px-4 py-4 shadow-md md:px-8 ">
      <img src={viteLogo} alt="viteLogo" />
      <ul className="flex gap-4">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "underline text-cyan-700" : ""
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "underline text-cyan-700" : ""
            }
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "underline text-cyan-700" : ""
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
        <li>
          <button onClick={() => setIsOpen(true)}>Sign In</button>
          <Modal
            header={<div className="text-xl font-bold">Sign In</div>}
            footer={
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-2 font-semibold bg-gray-300 rounded-md hover:bg-gray-400/80 active:bg-gray-400/60"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-2 font-semibold bg-blue-300 rounded-md hover:bg-blue-400/80 active:bg-blue-400/60"
                >
                  Sign In
                </button>
              </div>
            }
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          >
            <input
              placeholder="Username"
              className="px-2 py-1 border border-gray-600 rounded grow"
              type="text"
            />
            <input
              placeholder="Password"
              className="px-2 py-1 border border-gray-600 rounded grow"
              type="password"
            />
          </Modal>
        </li>
      </ul>
    </header>
  );
};

export default Header;
