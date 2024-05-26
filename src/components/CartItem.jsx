import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  decrementQty,
  deleteFromCart,
  incrementQty,
  resetCart,
} from "../redux/cartSlice";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";

function CartItem() {
  const cartData = useSelector((state) => state.cartData);
  const dispatch = useDispatch();
  return (
    <div className="w-2/3">
      <div className="w-full">
        <h2 className="font-titleFont text-2xl">
          {cartData.length ? (
            <h1 className="text-center text-4xl font-bold">Shopping Cart</h1>
          ) : (
            <h1 className="text-4xl text-center">It&apos;s empty in here!</h1>
          )}
        </h2>
      </div>
      <div>
        {cartData.map((item) => (
          <div
            key={item._id}
            className="flex items-center justify-evenly  mt-6">
            <div className="flex items-center gap-2">
              <MdDelete
                className="text-2xl text-gray-600 hover:text-red-600 cursor-pointer duration-300 mx-4"
                onClick={() =>
                  dispatch(
                    deleteFromCart({
                      _id: item._id,
                      title: item.title,
                      image: item.image,
                      price: item.price,
                      quantity: 1,
                      description: item.description,
                    })
                  ) & toast.warning(`${item.title} has been removed!`)
                }
              />
              <img
                src={item.image}
                alt="productImg"
                className="w-32 h-32 object-cover"
              />
            </div>
            <h2 className="w-52">{item.title}</h2>
            <p className="w-10">${item.price}</p>
            <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                <button
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                  onClick={() =>
                    dispatch(
                      decrementQty({
                        _id: item._id,
                        title: item.title,
                        image: item.image,
                        price: item.price,
                        quantity: 1,
                        description: item.description,
                      })
                    )
                  }>
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                  onClick={() =>
                    dispatch(
                      incrementQty({
                        _id: item._id,
                        title: item.title,
                        image: item.image,
                        price: item.price,
                        quantity: 1,
                        description: item.description,
                      })
                    )
                  }>
                  +
                </button>
              </div>
            </div>
            <p>${item.quantity * item.price}</p>
          </div>
        ))}
      </div>
      <button
        className="bg-red-500 text-white mt-8 ml-7 py-1 px-6 hover:bg-red-800 duration-300"
        onClick={() =>
          dispatch(resetCart()) & toast.error("Your cart is empty!")
        }
        style={cartData.length ? { display: "block" } : { display: "none" }}>
        Reset Cart
      </button>
      <Link to="/">
        <button className="mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300">
          <span>
            <HiOutlineArrowLeft />
          </span>
          Continue shopping
        </button>
      </Link>
    </div>
  );
}

export default CartItem;
