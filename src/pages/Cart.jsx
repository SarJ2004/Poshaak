import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { ToastContainer, toast } from "react-toastify";

function Cart() {
  const cartData = useSelector((state) => state.cartData);
  const userInfo = useSelector((state) => state.userInfo);
  // console.log(cartData);
  const [totalAmt, setTotalAmt] = useState(0);
  useEffect(() => {
    let price = 0;
    cartData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price.toFixed(2));
  }, [cartData]);
  const [payNow, setPayNow] = useState("false");
  const handleCheckout = () => {
    if (userInfo) {
      setPayNow(true);
    } else {
      toast.error("Please Sign in!");
    }
  };
  return (
    <div>
      <img
        src="https://images.pexels.com/photos/1012508/pexels-photo-1012508.jpeg?cs=srgb&dl=pexels-chandra-1012508.jpg&fm=jpg"
        alt="cartImg"
        className="w-full h-60 object-cover"
      />
      <div className="max-w-screen-xl mx-auto py-20 flex">
        <CartItem />
        <div className="w-1/3 bg-[#fafafa] py-6 px-4">
          <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
            <h2 className="text-2xl font-medium">Cart Totals</h2>
            <p className="flex items-start gap-4 text-base">
              Subtotal{" "}
              <span className="font-titleFont font-bold text-lg">
                ${totalAmt}
              </span>
            </p>
            <p className="flex items-start gap-4 text-base">
              Shipping{" "}
              <span className="text-gray-700">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Exercitationem, dolore.
              </span>
            </p>
          </div>
          <p className="font-titleFont font-semibold flex justify-between mt-6">
            Total <span className="text-xl font-bold">${totalAmt}</span>
          </p>
          <button
            className="text-base bg-black text-white w-full py-3 mt-6  duration-300 active:scale-95 rounded-sm "
            disabled={totalAmt == 0}
            onClick={handleCheckout}>
            Proceed to Checkout
          </button>
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

export default Cart;
