"use client";
import Image from "next/image";
import google_logo from "/public/google__logo.svg";

export default function SignInForm() {
  return (
    <div className="flex flex-col px-10 py-32 space-y-14 ">
      <h1 className="font-semibold text-4xl text-center">
        Welcome to <br /> YBS Management Portal
      </h1>
      <div className="flex flex-col space-y-5">
        <div className="flex flex-col space-y-10">
          <div className="flex ml-9">
            <label className="font-semibold text-xl">Email:</label>
            <input
              type="email"
              className=" border-b-2 border-black w-full rounded-sm ml-3 px-2 pt-1"
              placeholder="nguyenvana@gmail.com"
            />
          </div>
          <div className="flex ">
            <label className="font-semibold text-xl">Password:</label>
            <input
              type="password"
              className=" border-b-2 border-black w-full rounded-sm ml-3 px-2 pt-1"
              placeholder="Enter your password here"
            />
          </div>
        </div>
        <a href="#" className="text-right font-semibold hover:underline">
          Forgot password?
        </a>
        <div className="flex justify-center">
          <button className="font-semibold text-lg border-black border-[1px] bg-[#4286f5] hover:bg-[#3e7de2] text-white px-6 py-2 rounded-md ">
            Sign In
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center space-y-4">
        <div className="flex justify-center items-center">
          <hr className=" border-black border-[1px] flex-grow ml-10" />
          <span className="font-semibold text-lg p-2">OR</span>
          <hr className=" border-black border-[1px] flex-grow mr-10" />
        </div>
        <div className="flex justify-center">
          <button className="flex justify-center items-center border-black border-[1px] rounded-md ">
            <Image src={google_logo} alt="Logo Google" className="mx-3" />
            <span className="font-semibold text-lg bg-[#4286f5] hover:bg-[#3e7de2] px-4 py-2 text-white">
              Sign In With Google
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
