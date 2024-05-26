import React from "react";
import { google, userIcon } from "../assets";
import { PiGoogleLogoFill } from "react-icons/pi";
import { PiGithubLogoFill } from "react-icons/pi";
import { useSelector } from "react-redux";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.userInfo);

  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch(
          addUser({
            _id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );
        setTimeout(() => {
          navigate("/");
        }, 1500);
      })
      .catch((error) => console.log(error));
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        toast.warning("Logged Out Successfully!");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 py-20">
      {userInfo && (
        <div>
          <img className="rounded-full" src={userInfo.image} alt="" />
          <p className="text-center text-xl mt-4">{userInfo.name}</p>
        </div>
      )}

      <div className="w-full flex items-center justify-center gap-10">
        <div
          className="text-base w-60 h-16 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-white cursor-pointer duration-300 hover:bg-black hover:text-white"
          onClick={handleGoogleLogin}>
          {/* <img className="w-8" src={google} alt="" /> */}
          <PiGoogleLogoFill className=" h-8 w-8" />
          <span className="text-sm">Sign in with Google</span>
        </div>
        <button
          className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300"
          onClick={handleSignOut}
          id="sign-out">
          Sign Out
        </button>
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

export default Login;
