import { IconContext } from "react-icons";
import { BiMenu, BiX } from "react-icons/bi";
import { Link } from "react-router-dom";

import { useState } from "react";

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const menuItems = ["Beranda", "Donasi", "Volunteer", "Donasi & Volunteer"];

  return (
    <nav className="fixed top-0 w-full bg-primary-300 bg-opacity-20 backdrop-blur-lg z-50">
      <div className="flex items-center justify-between px-8 py-4 md:px-12 lg:px-20">
        <div>
          <img src="" alt="Logo" className="w-20 lg:w-24" />
        </div>
        <div className="hidden items-center md:flex md:gap-4 lg:gap-8">
          {menuItems.map((menuItem, index) => (
            <a
              key={index}
              href={`#${menuItem}`}
              className="text-base hover:text-primary-500 md:text-sm lg:text-base"
            >
              {menuItem}
            </a>
          ))}
          {isLogin ? (
            <Link
              to="/dashboard"
              className="rounded-lg bg-gradient-to-r from-primary-400 to-primary-600 px-4 py-2 text-lg text-white hover:from-primary-600 hover:to-primary-600"
            >
              Profil
            </Link>
          ) : (
            <Link
              to="/login"
              className="rounded-lg bg-gradient-to-r from-primary-400 to-primary-600 px-4 py-2 text-lg text-white hover:from-primary-600 hover:to-primary-600"
            >
              Masuk
            </Link>
          )}
        </div>
        <button
          className={`md:hidden ${
            isMenuOpen ? "border" : ""
          } rounded-lg border-primary-500`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <IconContext.Provider
              value={{ color: "black", className: "w-6 h-6" }}
            >
              <BiX />
            </IconContext.Provider>
          ) : (
            <IconContext.Provider
              value={{ color: "black", className: "w-6 h-6" }}
            >
              <BiMenu />
            </IconContext.Provider>
          )}
        </button>
      </div>
      {isMenuOpen && (
        <div className="flex h-screen flex-col items-center gap-12 p-4 md:hidden">
          {menuItems.map((menuItem, index) => (
            <a key={index} href={`#${menuItem}`} className="text-xl">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {menuItem}
              </button>
            </a>
          ))}
          {isLogin ? (
            <Link
              to="/dashboard"
              className="rounded-lg bg-gradient-to-r from-primary-400 to-primary-600 px-4 py-2 text-lg text-white hover:from-primary-600 hover:to-primary-600"
            >
              Profil
            </Link>
          ) : (
            <Link
              to="/login"
              className="rounded-lg bg-gradient-to-r from-primary-400 to-primary-600 px-4 py-2 text-lg text-white hover:from-primary-600 hover:to-primary-600"
            >
              Masuk
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
