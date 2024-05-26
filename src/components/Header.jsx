import React from "react";
import { cart, logoLight, userIcon } from "../assets/index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Header() {
  const cartData = useSelector((state) => state.cartData);
  const userInfo = useSelector((state) => state.userInfo);
  console.log(cartData);
  return (
    <div
      className=" w-full h-20 bg-white border-b-2  border-b-gray-800 shadow-lg font-titleFont sticky z-50 top-0
    ">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <div>
            <img className="w-60" src={logoLight} alt="logoDark" />
          </div>
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <Link to="/">
              <li className="text-base text-gray-600 font-bold hover:text-black   cursor-pointer duration-300">
                Home
              </li>
            </Link>
            <li className="text-base text-gray-600 font-bold hover:text-black   cursor-pointer duration-300">
              About
            </li>
            <li className="text-base text-gray-600 font-bold hover:text-black   cursor-pointer duration-300">
              Delivery
            </li>
            <li className="text-base text-gray-600 font-bold hover:text-black   cursor-pointer duration-300">
              Policy
            </li>
            <li className="text-base text-gray-600 font-bold hover:text-black   cursor-pointer duration-300">
              Blog
            </li>
          </ul>
          <Link to="/cart">
            <div className="relative cursor-pointer hover:scale-105 duration-100">
              <img className="w-8" src={cart} alt="cartImg" />
              <span className="absolute w-6 top-[10px] left-1 text-sm flex items-center justify-center font-semibold">
                {cartData.length}
              </span>
            </div>
          </Link>
          <Link className="flex items-center justify-center gap-2" to="/login">
            <img
              className="w-8 h-8 rounded-full"
              src={userInfo ? userInfo.image : userIcon}
              alt=""
            />

            {userInfo && (
              <p className="text-base font-titleFont font-semibold underline underline-offset-2">
                {userInfo.name}
              </p>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
