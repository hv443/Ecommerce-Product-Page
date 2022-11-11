import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faXmark, faBars } from "@fortawesome/free-solid-svg-icons";

import CartItem from "./CartItem";

import logo from "../assets/logo/logo.svg";
import avatarSvg from "../assets/avatar/image-avatar.png";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navLinksArray = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "Collections",
            path: "/collection",
        },
        {
            name: "Men",
            path: "/men",
        },
        {
            name: "Women",
            path: "/women",
        },
        {
            name: "About",
            path: "/about",
        },
        {
            name: "Contact",
            path: "/contact",
        },
    ];

    function toggleMenu() {
        setIsMenuOpen((pre) => !pre);
    }

    const navLinks = navLinksArray.map((link, index) => {
        return (
            <NavLink
                onClick={toggleMenu}
                key={index}
                to={link.path}
                className={({ isActive }) => {
                    return isActive
                        ? "border-element border-b-2 duration-300 cursor-pointer block md:py-6 text-primary"
                        : "border-transparent border-b-2 hover:border-primary duration-300 cursor-pointer block md:py-6 text-primary font-bold md:text-secondary";
                }}>
                {link.name}
            </NavLink>
        );
    });

    return (
        <header className="flex justify-between items-center mx-auto border-b p-4 md:p-0 md:w-11/12 xl:w-9/12">
            <div className="flex items-center space-x-5 md:space-x-0">
                <button className="md:hidden" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <NavLink to="/">
                    <img src={logo} alt="logo" />
                </NavLink>
            </div>
            <nav
                className={`${
                    isMenuOpen ? "translate-x-0" : "-translate-x-full"
                } absolute h-full z-20 left-0 top-0 w-2/3 font-semibold duration-300 bg-light p-8 
                md:relative md:p-0 md:translate-x-0 md:bg-transparent `}>
                <button onClick={toggleMenu} className="mb-16 md:hidden">
                    <FontAwesomeIcon icon={faXmark} />
                </button>

                <div className="space-y-8 md:flex md:space-y-0 md:space-x-6">{navLinks}</div>
            </nav>

            <div className="flex items-center space-x-5 md:relative">
                <CartItem />
                <button>
                    <FontAwesomeIcon icon={faCartShopping} />
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
