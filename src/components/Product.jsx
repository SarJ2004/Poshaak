import React, { useEffect, useState } from "react";
import { MdOutlineStar } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";
import { ToastContainer, toast } from "react-toastify";

function Product() {
  const dispatch = useDispatch();
  const [details, setDetails] = useState({});
  let [qty, setQty] = useState(1);
  const location = useLocation();
  useEffect(() => {
    setDetails(location.state.item);
  }, [location.state.item]);
  console.log(location.state.item);
  return (
    <div>
      <div className="max-w-screen-xl mx-auto my-10 flex gap-10">
        <div className=" w-2/5 relative">
          <img
            src={details.image}
            alt="productImg"
            className="w-full h-[550px] object-cover"
          />
          <div className="absolute top-4 right-0">
            {details.isNew && (
              <p className="bg-black text-white font-semibold font-titleFont px-6 py-1">
                New!
              </p>
            )}
          </div>
        </div>
        <div className="w-3/5 flex flex-col justify-center gap-12">
          <div>
            <h2 className="text-4xl font-semibold">{details.title}</h2>
          </div>
          <div className="flex items-center gap-4 mt-3">
            <p className="line-through text-gray-500 text-base">
              ${details.oldPrice}
            </p>
            <p className="font-medium text-2xl text-gray-900">
              ${details.price}
            </p>
          </div>
          <div className="flex items-center gap-2 text-base">
            <div className="flex">
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
            </div>
            <p className="text-xs text-gray-500">(1 Customer review)</p>
          </div>
          <p className="text-base text-gray-500 -mt-3">{details.description}</p>
          <div className="flex gap-4">
            <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                <button
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                  onClick={() => setQty(qty >= 2 ? qty - 1 : 1)}>
                  -
                </button>
                <span>{qty}</span>
                <button
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                  onClick={() => setQty(qty + 1)}>
                  +
                </button>
              </div>
            </div>
            <button
              className="bg-black text-white py-3 px-6 active:bg-gray-800 active:scale-95 select-none duration-100"
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: details._id,
                    title: details.title,
                    image: details.image,
                    price: details.price,
                    quantity: qty,
                    description: details.description,
                  })
                ) & toast.success(`${details.title} has been added!`)
              }>
              Add to cart
            </button>
          </div>
          <p className="text-base text-gray-500">
            Category:{" "}
            <span className="font-medium capitalize">{details.category}</span>
          </p>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />
    </div>
  );
}

export default Product;
