"use client"
import Image from "next/image"
import Link from "next/link"
import { NAV_LINKS } from './../constants/index';
import Button from "./Button";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flexBetween py-5 max-container padding-container relative z-30">
      <Link href="/"> 
        <Image src="hilink-logo.svg" alt="logo" width={80} height={31} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden"> 
        <Button 
          type="button"
          title="Login"
          variant="btn_dark_green"
          icon="/user.svg"
        /> 
      </div>

      <Image 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="cursor-pointer lg:hidden inline-block"
      /> 

      <div className={`absolute top-full left-0 w-full bg-white shadow-md lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="flex flex-col items-center py-4">
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className="regular-16 text-gray-50 cursor-pointer py-2 hover:font-bold">
              {link.label}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
