import React from "react";
import { ReactComponent as Google } from "../../assets/google-icon.svg";

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., perform validation, login logic, etc.
  };

  return (
    <form onSubmit={handleSubmit} className="w-full h-full rounded-2xl pt-12">
      <div className="flex flex-col justify-center items-center pb-6">
        <p className="text-center text-3xl text-neutral-700 font-bold">Login</p>
        <p className="text-center text-neutral-500 font-medium mt-3">
          Hey, Enter your details to Login to your <br /> account
        </p>
      </div>
      <div className="mx-8 mb-5">
        <input
          className="rounded-lg w-full h-12 py-2 px-4 text-sm text-neutral-500 leading-tight bg-bgwhite border border-neutral-200 focus:bg-neutral-50 focus:outline-none placeholder:text-sm"
          id="email"
          type="email"
          placeholder="Enter Email"
          required
        />
      </div>
      <div className="mx-8 mb-5">
        <input
          className="rounded-lg w-full h-12 py-2 px-4 text-sm text-neutral-500 leading-tight bg-bgwhite border border-neutral-200 focus:bg-neutral-50 focus:outline-none placeholder:text-sm"
          id="password"
          type="password"
          placeholder="Enter Password"
          required
        />
      </div>
      <div className="mx-8 mb-6">
        <a
          href="https://blisskart.in/"
          onClick={(e) => e.preventDefault()}
          className="font-medium text-sm text-link-blue hover:underline hover:underline-offset-2"
        >
          Having trouble signing in?
        </a>
      </div>
      <div className="w-full flex items-center justify-between px-8">
        <button
          className="w-full h-12 text-white font-bold py-2 px-4 rounded-lg bg-magic-600 hover:bg-magic-800 focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Sign In
        </button>
      </div>
      <div className="flex flex-col justify-center items-center mt-5 mx-8">
        <div className="flex flex-col justify-center">
          <p className="text-sm font-medium">&#8212; Or Sign in with &#8212;</p>
          <div className="flex justify-center items-center mt-4 py-2 px-4 rounded-lg border border-neutral-200 cursor-pointer hover:bg-neutral-50">
            <Google className="w-5 h-5"/>
            <p className="px-3">Google</p>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;
