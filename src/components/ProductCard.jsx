import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";
import { ToastContainer, toast } from "react-toastify";
function ProductCard({ product }) {
  console.log(product);
  const _id = product.title;
  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  };
  const rootId = idString(_id);
  console.log(rootId);
  const navigate = useNavigate();
  // this handleDetails will have an additional data as state, which will contain an item, which will give access to the product
  // this will give the product page the access to the details. we can grab the details by using useLocation hook.
  const handleDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: product,
      },
    });
  };
  const dispatch = useDispatch();

  return (
    <div className="group relative">
      <div
        className="w-full h-96 cursor-pointer overflow-hidden"
        onClick={handleDetails}>
        <img
          className="w-full h-full object-cover group-hover:scale-110 duration-500"
          src={product.image}
          alt="productImg"
        />
      </div>
      <div className="w-full border-[1px] px-2 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-titleFont text-base font-bold">
              {product.title.length >= 14 ? (
                <span>{product.title.substring(0, 15)}...</span>
              ) : (
                <span>{product.title}</span>
              )}
            </h2>
          </div>
          <div className="flex justify-end gap-2 relative overflow-hidden w-28 text-sm">
            <div className="flex gap-2">
              <p className="line-through text-gray-500">${product.oldPrice}</p>
              <p className="font-semibold">${product.price}</p>
            </div>
          </div>
        </div>
        <div>
          <p
            className="bg-black text-white font-semibold font-titleFont px-6 py-1 text-center rounded-md hover:scale-105 duration-300 hover:cursor-pointer"
            onClick={() =>
              dispatch(
                addToCart({
                  _id: product._id,
                  title: product.title,
                  image: product.image,
                  price: product.price,
                  quantity: 1,
                  description: product.description,
                })
              ) & toast.success(`${product.title} has been added!`)
            }>
            Add to cart <BsArrowRight className="inline" />
          </p>
        </div>
        <div className="absolute top-4 right-0">
          {product.isNew && (
            <p className="bg-black text-white font-semibold font-titleFont px-6 py-1">
              New!
            </p>
          )}
        </div>
      </div>
      <ToastContainer
        position="top-right"
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

export default ProductCard;
