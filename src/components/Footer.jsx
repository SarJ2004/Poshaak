import React from "react";
import { logoDark, paymentMethods } from "../assets";
import { ImGithub } from "react-icons/im";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsPersonFill, BsPaypal } from "react-icons/bs";
function Footer() {
  return (
    <div className="bg-black text-[#949494] py-20 font-titleFont">
      {/* icons */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-4">
        <div className="flex flex-col gap-7">
          <img className="w-32" src={logoDark} alt="logoDark" />
          <p className="text-white text-sm tracking-wide">&copy; poshaak.com</p>
          <img className="w-56" src={paymentMethods} alt="" />
          <div className="flex gap-5 text-lg text-gray-400">
            <ImGithub className="hover:text-white duration-300 cursor-pointer" />
            <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
            <FaFacebook className="hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        {/* LocateUs */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Locate Us</h2>
          <div className="text-base flex flex-col gap-2">
            <p>NIT Silchar, Silchar, Assam-788010, India</p>
            <p>Mobile: +91 8539065666</p>
            <p>e-Mail: sargedevx@gmail.com</p>
          </div>
        </div>
        {/* Profile */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Profile</h2>
          <div className="flex flex-col gap-2 text-base">
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPersonFill />
              </span>{" "}
              My Account
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPaypal />
              </span>{" "}
              Checkout
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <FaHome />
              </span>{" "}
              Track Orders
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <MdLocationOn />
              </span>{" "}
              Help and Support
            </p>
          </div>
        </div>
        {/* subscription */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Be Updated!
          </h2>
          <div className="flex flex-col justify-center gap-4">
            <input
              type="text"
              className="bg-transparent border px-4 py-2 text-sm rounded-sm"
              placeholder="e-mail"
            />
            <button className="text-sm border text-white  hover:bg-white hover:text-black transition-transform duration-300 rounded-md hover:-translate-y-1 py-2 px-2 max-w-20">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
