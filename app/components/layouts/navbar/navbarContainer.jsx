"use client"; 
import { useState } from "react";
import Navbar from "./navbar";

export const NavbarContainer = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen((prev) => !prev);

    return <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />;
};
