import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Links from "./Links";
import SearchBar from "./SearchBar";
import style from "../styles/logo.module.css";

const NavBar = ({ darkTheme, setDarkTheme }) => {
  const [isMain, setIsMain] = useState(true);
  const location = useLocation();
  useEffect(() => {
    location.pathname === "/" ? setIsMain(true) : setIsMain(false);
  }, [location.pathname]);

  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <div className="flex justify-between flex-col md:flex-row items-center space-x-5 ">
          <Link to="/">
            <p className="text-3xl font-bold px-2 py-1 dark:text-gray-200 mb-2 md:mb-0 mr-10 w-full">
              <span className={darkTheme ? "" : style.logo}>Googlee</span>
            </p>
          </Link>
          {!isMain && <SearchBar />}
        </div>
        <div className="flex">
          
            <ul className="flex gap-3 justify-center items-center">
              <li><button
            type="button"
            className="text-lg dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg"
            onClick={() => setDarkTheme(!darkTheme)}
          >
            {darkTheme ? "Light ☀️" : "Dark 🌙"}
          </button></li>
              <li><a href="https://mail.google.com/mail/?authuser=0&ogbl">Gmail</a></li>
              <li><Link to="/image">Images</Link></li>
              <li className="cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg></li>
              <li className="cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg></li>
            </ul>

        </div>
      </div>
      {!isMain && <Links />}
    </div>
  );
};

export default NavBar;
