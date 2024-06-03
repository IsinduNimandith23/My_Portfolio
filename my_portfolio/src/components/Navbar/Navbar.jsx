import { useState } from "react";
import "./Navbar.css";
import MobileNav from "./MobileNav/MobileNav";
// import { Mail } from "@mui/icons-material";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className="logo" src="./assets/images/logo.png" alt="logo" />
          <ul>
            <li>
              <a className="menu-item" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="menu-item" href="#">
                Skills
              </a>
            </li>
            <li>
              <a className="menu-item" href="#">
                Work Experience
              </a>
            </li>
            <li>
              <a className="menu-item" href="#">
                Contact Me
              </a>
            </li>
          </ul>
          <button
            className="contact-btn"
            onClick={() => {
                const email = 'isindunimandith23@gmail.com';
                const subject = 'Hire Me';
                const body = 'Hello, I would like to hire you for a project. Please get back to me with more information.';
                const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject || '')}&body=${encodeURIComponent(body || '')}`;
                window.location.href = mailtoLink;
            }}
            >
            Hire Me
          </button>
          <button className="menu-btn" onClick={toggleMenu}>
            <span
              className={"material-symbols-outlined"}
              style={{ fontSize: "1.8rem" }}
            >
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
