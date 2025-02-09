"use client"; 

import { useState } from "react";
import Link from "next/link"; 
import { usePathname } from "next/navigation"; 
import CartWidget from "../../common/cardwidget/cardWidget";
import { categories } from "./categories";
import Model from "../model/model";

const Navbar = ({ menuOpen, toggleMenu }) => {
const pathname = usePathname(); 

const [isOpen, setIsOpen] = useState(false);

if (pathname === "/error") {
return null;
}



const toggleButton = () => {
setIsOpen((prev) => !prev);
};

return (
<div className="w-full h-full relative">
    <header className="flex justify-between items-center text-black px-6 py-8 md:px-32 drop-shadow-md bg-orange-400">
    <Link href="/">
        <h1 className="text-lg sm:text-2xl md:text-3xl">
        Cura <span className="text-amber-300 font-semibold">Fácil</span>
        </h1>
    </Link>

    <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
        {categories.map(({ title, path }) => (
        <Link
            key={title}
            href={path} 
            className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer"
        >
            {title}
        </Link>
        ))}
    </ul>

    <div className="relative hidden md:flex items-center justify-center gap-3">
        <i
        className="bx bx-menu xl:hidden block text:5xl cursor-pointer"
        onClick={toggleMenu}
        ></i>
    </div>

    <div
        className={`absolute xl:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${
        menuOpen ? "opacity-100" : "opacity-0"
        } ${menuOpen ? "translate-y-0" : "-translate-y-4"}`}
        style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
    >
        <li className="list-none w-full text-center p-4 hover:bg-sky-400 cursor-pointer">
        CONTACTO
        </li>
        <li className="list-none w-full text-center p-4 hover:bg-sky-400 cursor-pointer">
        PRODUCTOS
        </li>
        <li className="list-none w-full text-center p-4 hover:bg-sky-400 cursor-pointer">
        SERVICIOS
        </li>
    </div>

    <CartWidget toggleButton={toggleButton} />

    <Model toggleButton={toggleButton} isOpen={isOpen} />
    </header>
</div>
);
};

export default Navbar;