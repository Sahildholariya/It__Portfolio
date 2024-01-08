import React, { useEffect, useRef } from 'react'
import logoImg from "../logo/appture.png";

import "./header.css"

const nav__link = [
    {
        path: '#home',
        display: 'Home'
    },
    {
        path: '#about',
        display: 'About'
    },
    {
        path: '#service',
        display: 'Service'
    },
    {
        path: '#projects',
        display: 'Projects'
    },
    {
        path: '#blog',
        display: 'Blog'
    },
]

const Header = ({ theme, toggleTheme }) => {

    const menuRef = useRef(null)

    const hendleClick = (e) => {
        e.preventDefault();
    
        const targetAttr = e.target.getAttribute('href');
        
        if (!targetAttr) {
            console.error('Invalid target attribute.');
            return;
        }
    
        const targetElement = document.querySelector(targetAttr);
    
        if (!targetElement) {
            console.error(`Element with selector "${targetAttr}" not found.`);
            return;
        }
    
        const location = targetElement.offsetTop;
    
        window.scrollTo({
            left: 0,
            top: location - 80,
            behavior: 'smooth', // Add smooth scrolling if desired
        });
    };
    
    
    const toggleMenu = e => menuRef.current.classList.toggle('menu__active')


    return (
        <div>
            <header className="header header__shrink">
                <div className="container">
                    <div className="nav__wrapper">
                        <div className="logo">
                            <img src={logoImg} alt="" />
                        </div>

                        {/* =============== Navigation ============== */}
                        <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                            <ul className="menu">
                                {
                                    nav__link.map((item, index) => (
                                        <li className="menu__item" key={index}>
                                            <a href={item.path} onClick={hendleClick} className="menu__link">
                                                {item.display}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        {/* ==================== Light Mode ===================== */}

                        <div className="light__mode">
                            <span onClick={toggleTheme}>
                                {
                                    theme === 'light-theme' ? <span><i className="ri-moon-line"></i> Dark</span> : <span><i className="ri-sun-line"></i> Dark</span>
                                }
                            </span>
                        </div>

                        <div className="mobile__menu" onClick={toggleMenu}>
                        <i class="ri-menu-add-fill"></i>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header
