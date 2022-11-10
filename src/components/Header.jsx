import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.svg";
import cartIcon from "../assets/icons/icon-cart.svg";
import closeIcon from "../assets/icons/icon-close.svg";
import menuIcon from "../assets/icons/icon-menu.svg";
import avatarSvg from "../assets/avatar/image-avatar.png";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [navLinksArray, setNavLinksArray] = useState([
        {
            name: "Home",
            path: "/",
            isActive: false,
        },
        {
            name: "Collections",
            path: "/collection",
            isActive: false,
        },
        {
            name: "Men",
            path: "/men",
            isActive: false,
        },
        {
            name: "Women",
            path: "/women",
            isActive: false,
        },
        {
            name: "About",
            path: "/about",
            isActive: false,
        },
        {
            name: "Contact",
            path: "/contact",
            isActive: false,
        },
    ]);

    function toggleMenu() {
        setIsMenuOpen((pre) => !pre);
    }

    function activeLink(e) {
        setIsMenuOpen((pre) => !pre);
        const activeLink = navLinksArray.map((link) => {
            if (e.target.innerText == link.name) {
                return { ...link, isActive: true };
            }
            return { ...link, isActive: false };
        });
        setNavLinksArray(activeLink);
    }

    const navLinks = navLinksArray.map((link, index) => {
        return (
            <Link
                onClick={activeLink}
                key={index}
                to={link.path}
                className={`${
                    link.isActive ? "border-element" : "border-transparent"
                } border-b-2  hover:border-element duration-300 cursor-pointer block md:py-6`}>
                {link.name}
            </Link>
        );
    });

    return (
        <header className="flex justify-between items-center mx-auto border-b p-4 md:p-0 md:w-11/12 lg:w-5/6">
            <div className="flex items-center space-x-5 md:space-x-0">
                <button className="md:hidden" onClick={toggleMenu}>
                    <img src={menuIcon} alt="menu-icon" />
                </button>
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <nav
                className={`${
                    isMenuOpen ? "translate-x-0" : "-translate-x-full"
                } absolute h-full z-20 left-0 top-0 w-2/3 text-secondary font-semibold duration-300 bg-regular p-8 
                md:relative md:p-0 md:translate-x-0 md:bg-transparent `}>
                <button className="mb-16 md:hidden">
                    <img onClick={toggleMenu} src={closeIcon} alt="close-icon" />
                </button>

                <div className="space-y-8 md:flex md:space-y-0 md:space-x-6">{navLinks}</div>
            </nav>

            <div className="flex items-center space-x-5">
                <button>
                    <img src={cartIcon} alt="menu-icon" />
                </button>
                <div>
                    <img
                        className="w-9  hover:border-element border-2 border-transparent rounded-full"
                        src={avatarSvg}
                        alt="logo"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;