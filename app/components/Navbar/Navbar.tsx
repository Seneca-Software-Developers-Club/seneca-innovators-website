"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { INavLink } from "@/app/interfaces";
import { INavLink } from "@/app/interfaces";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const closeMenu = () => setIsMenuOpen(false);
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <nav className="bg-black p-4 fixed w-full z-50 top-0">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white font-normal text-xl pl-0">
          <span className="font-['Roboto_Mono'] uppercase tracking-wider">
            Seneca Innovators
          </span>
        </Link>

        <div className="hidden lg:flex space-x-8">
          <NavLink href="/" label="Home" pathname={pathname} />
          <NavLink
            href="/case-competition"
            label="Case Competition"
            href="/case-competition"
            label="Case Competition"
            pathname={pathname}
          />
        </div>

        <button
          className="lg:hidden text-white focus:outline-none z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-black bg-opacity-90 z-40 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <NavLink
            href="/"
            label="Home"
            pathname={pathname}
            mobile
            onClick={toggleMenu}
          />
          <NavLink
            href="/case-competition"
            label="Case Competition"
            pathname={pathname}
            mobile
            onClick={toggleMenu}
          />
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({
  href,
  label,
  pathname,
  mobile = false,
  onClick,
}: INavLink) => {
}: INavLink) => {
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${
        mobile ? "text-2xl" : "text-base"
      } text-white font-['Roboto_Mono'] relative overflow-hidden group`}
      onClick={onClick}
    >
      <span className="flex items-center">{label}</span>
      <span className="flex items-center">{label}</span>
      <span
        className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#9E2424] to-[#CC0000] transform ${
          isActive ? "scale-x-100" : "scale-x-0"
        } transition-transform duration-300 origin-left group-hover:scale-x-100 glow`}
      ></span>
    </Link>
  );
};

export default Navbar;
