import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

const SignUp = () => {
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-[600px]">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
            </form>
            <h3 className="font-bold text-lg text-pink-500">Sign Up</h3>
            {/* Name */}
            <div className="mt-4 space-y-2">
              <span>Name:</span>
              <br />
              <input
                type="text"
                placeholder="Enter Your Full Name"
                className="w-80 px-3 py-1 border outline-none rounded-md"
              />
            </div>
            {/* Email */}
            <div className="mt-4 space-y-2">
              <span>Email:</span>
              <br />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-80 px-3 py-1 border outline-none rounded-md"
              />
            </div>
            {/* PAssword */}
            <div className="mt-4 space-y-2">
              <span>Password:</span>
              <br />
              <input
                type="text"
                placeholder="Enter Your Password"
                className="w-80 px-3 py-1 border outline-none rounded-md"
              />
            </div>
            {/* Button */}
            <div className="flex justify-around mt-4">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Sign Up
              </button>
              <p className="text-xl">
                Have Account?{" "}
                <button
                  className="text-blue-600 underline cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login!
                </button>
                <Login />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
