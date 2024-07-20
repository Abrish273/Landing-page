import React, { useState } from "react";
import { BurgerIcon, Logo } from "../../assets";
import { CustomBtn } from "../../components";
import "../../App.css";
import { Outlet, useNavigate } from "react-router-dom";

const links = [
  { id: 1, text: "Products", href: "products" },
  { id: 2, text: "Solution", href: "#" },
  { id: 3, text: "Resource", href: "#" },
  { id: 4, text: "Developers", href: "#" },
  { id: 5, text: "Pricing", href: "#" },
];

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const onToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    console.log("Button clicked!");
  };
  return (
    <div /*className="global"*/>
      <div className="global">
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <header className="bg-white">
          <nav className="flex justify-between items-center w-[92%] mx-auto">
            <div
              className={`nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 ${
                isOpen ? "top-20" : "top-[-100%]"
              } md:w-auto w-full flex items-center px-5`}
            >
              <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                {links.map((link) => (
                  <li
                    key={link.id}
                    onClick={() => navigate(`${link.href}`)}
                  >
                    {link.text}
                  </li>
                ))}
              </ul>
            </div>
            <CustomBtn onClick={handleClick} label="Submit" type="type_one" />
            <div className="flex items-center gap-4">
              <div /*className="md:hidden"*/></div>

              <img
                onClick={onToggleMenu}
                className="w-8 h-8 cursor-pointer md:hidden"
                src={BurgerIcon}
                alt="burger-icons"
              />
              {/*
                
            <label className="btn btn-circle swap swap-rotate">
            <input type="checkbox" />

            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512">
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>

            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512">
              <polygon
                points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
               
             */}
            </div>
          </nav>
        </header>
      </div>
      <div>{<Outlet />}</div>
    </div>
  );
};

export default Navbar;
