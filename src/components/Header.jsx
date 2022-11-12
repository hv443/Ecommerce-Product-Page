import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faXmark, faBars } from "@fortawesome/free-solid-svg-icons";

import CartItem from "./CartItem";

import logo from "../assets/logo/logo.svg";
import avatarSvg from "../assets/avatar/image-avatar.png";
import { useCart } from "../context/useContext";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { cartItemCount } = useCart();
    const menuRef = useRef();

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
    function toggleCart() {
        setIsCartOpen((pre) => !pre);
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
                        : "border-transparent border-b-2 hover:border-primary duration-300 cursor-pointer block md:py-6 text-primary font-bold md:font-semibold md:text-secondary";
                }}>
                {link.name}
            </NavLink>
        );
    });

    useEffect(() => {
        function closeMenu(e) {
            if (!menuRef.current.contains(e.target)) {
                setIsMenuOpen(false);
            }
        }
        document.addEventListener("mousedown", closeMenu);
        return () => {
            document.removeEventListener("mousedown", closeMenu);
        };
    });

    return (
        <header className="flex justify-between items-center mx-auto border-b p-4 md:p-0 md:w-11/12 xl:w-9/12">
            {isMenuOpen && (
                <div className="md:hidden absolute left-0 top-0 w-full h-full bg-black/70 z-20"></div>
            )}

            <div className="flex items-center space-x-5 md:space-x-0">
                <button className="md:hidden" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <NavLink to="/">
                    <img src={logo} alt="logo" />
                </NavLink>
            </div>
            <nav
                ref={menuRef}
                className={`${
                    isMenuOpen ? "translate-x-0 " : "-translate-x-full"
                } absolute h-full z-20 left-0 top-0 w-2/3 font-semibold duration-300 bg-light p-8 
                md:relative md:p-0 md:translate-x-0 md:bg-transparent `}>
                <button onClick={toggleMenu} className="mb-16 md:hidden">
                    <FontAwesomeIcon icon={faXmark} />
                </button>

                <div className="space-y-8 md:flex md:space-y-0 md:space-x-6">{navLinks}</div>
            </nav>

            <div className="flex items-center gap-5 md:relative">
                {isCartOpen && <CartItem toggleCart={toggleCart} setIsCartOpen={setIsCartOpen} />}
                <button className="relative" onClick={toggleCart}>
                    {cartItemCount > 0 && (
                        <span className="absolute text-light px-2 text-[10px] bg-element -top-1 -right-3 rounded-xl pointer-events-none">
                            {cartItemCount}
                        </span>
                    )}

                    <FontAwesomeIcon
                        className="duration-200  active:text-element hover:text-element"
                        icon={faCartShopping}
                    />
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
