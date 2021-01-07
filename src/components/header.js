import { Link } from "gatsby";
import React, { useState } from "react";
import logo from "../images/logo.png"
function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  

  return (
    <header className="fixed w-full  sm:bg-gray-800 sm:shadow-md">
      <div className=" flex flex-wrap items-center justify-between  p-1  md:p-2">
        <Link to="/">
          <h1 className="flex items-center text-pink-700 no-underline">
            <span className="text-xl font-bold tracking-tight">
        <img src={logo} className="max-h-10"></img>
            </span>
          </h1>
        </Link>

        <button
          className="items-center block px-3 py-2 text-blue-400 border border-blue-400 rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:items-center w-full md:w-auto`}
        >
          {[
            {
              route: `/#about`,
              title: `About`,
            },
            {
              route: `/#resume`,
              title: `Resume`,
            },
            {
              route: `/#contact`,
              title: `Contact`,
            },
           
          ].map((link) => (
            <Link
              className=" font-semibold sm:flex sm:flex-col mt-4 text-blue-400 hover:text-yellow-500 no-underline md:inline-block md:mt-0 md:ml-6"
              key={link.title}
              to={link.route}
              onClick={() => toggleExpansion(!isExpanded)}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
