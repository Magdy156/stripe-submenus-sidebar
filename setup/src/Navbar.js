import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { openSidebar, openSubMenu, closeSubMenu } = useGlobalContext();
  const displySubmenu = (e) => {
    const page = e.target.textContent;
    const btnDimensions = e.target.getBoundingClientRect();
    const centerOfBtn = (btnDimensions.right + btnDimensions.left) / 2;
    const bottom = btnDimensions.bottom - 3;

    openSubMenu(page, { centerOfBtn, bottom });
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubMenu();
    }
  };
  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="logo"></img>
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displySubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
