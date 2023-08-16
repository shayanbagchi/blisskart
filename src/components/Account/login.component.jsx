import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Google } from "../../assets/google-icon.svg";
import { ReactComponent as LeftIcon } from "../../assets/left_icon.svg";
import {
  signInWithGooglePopup,
  signInUserWithEmailAndPassword,
} from "../../utils/firebase.util";

const defaultFormFields = {
  email: "",
  password: "",
};

function Login() {
  const navigate = useNavigate();

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    navigate(-1);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInUserWithEmailAndPassword(email, password);
      resetFormFields();
      navigate(-1);
    } catch (error) {
      if (
        error.code === "auth/wrong-password" ||
        error.code === "auth/user-not-found"
      ) {
        alert("Incorrect email and password combination!");
      } else {
        console.log("There is an error logging in user:", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-full h-full rounded-2xl pt-12"
    >
      <div
        className="absolute top-4 left-4 flex items-center p-4 bg-white rounded-full border border-neutral-50 shadow cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <LeftIcon className="h-5 w-5" />
      </div>
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
          name="email"
          value={email}
          placeholder="Enter Email"
          onChange={handleChange}
          required
        />
      </div>
      <div className="mx-8 mb-5">
        <input
          className="rounded-lg w-full h-12 py-2 px-4 text-sm text-neutral-500 leading-tight bg-bgwhite border border-neutral-200 focus:bg-neutral-50 focus:outline-none placeholder:text-sm"
          id="password"
          type="password"
          name="password"
          value={password}
          placeholder="Enter Password"
          onChange={handleChange}
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
          <div
            className="flex justify-center items-center mt-4 py-2 px-4 rounded-lg border border-neutral-200 cursor-pointer hover:bg-neutral-50"
            onClick={signInWithGoogle}
          >
            <Google className="w-5 h-5" />
            <p className="px-3">Google</p>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;
