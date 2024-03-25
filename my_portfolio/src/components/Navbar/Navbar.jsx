import { useState } from 'react';
import './Navbar.css';
import MobileNav from './MobileNav/MobileNav';

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

  return (
    <>
        <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
            <nav className='nav-wrapper'>
            <div className='nav-content'>
                <img className='logo' src="./assets/images/logo.png" alt="logo" />
                <ul>
                <li>
                    <a className='menu-item' href="#">Home</a>
                </li>
                <li>
                    <a className='menu-item' href="#">Skills</a>
                </li>
                <li>
                    <a className='menu-item' href="#">Work Experience</a>
                </li>
                <li>
                    <a className='menu-item' href="#">Contact Me</a>
                </li>
                </ul>
                <button className='contact-btn' onClick={() => {}}>
                Hire Me
                </button>
                <button className="menu-btn" onClick={toggleMenu}>
                <span
                    className={"material-symbols-outlined"}
                    style={{ fontSize: '1.8rem' }}
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
