import React, { useState } from "react";
import { BurgerIcon, Logo, Right } from "../../assets";
import { CustomBtn } from "../../components";
import { COLORS } from "../../constants/theme";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    console.log("Button clicked!");
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 3rem",
      }}
    >
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
              <li>
                <a className="hover:text-gray-500" href="#">
                  Products
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">
                  Solution
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">
                  Resource
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">
                  Developers
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-4">
            {/* <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
              Sign in
            </button> */}
            <div className="sm:hidden">
              <CustomBtn
                onClick={handleClick}
                label="Submit"
                type="type_one"
                // backgroundColor="#3498db"
                // textColor={COLORS.primary}
                // borderColor="#3498db"
              />
            </div>

            <img
              onClick={onToggleMenu}
              className="w-8 h-8 cursor-pointer md:hidden"
              src={BurgerIcon}
              alt="burger-icons"
            />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
