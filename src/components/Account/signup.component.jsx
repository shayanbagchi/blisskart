import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Google } from "../../assets/google-icon.svg";
import { ReactComponent as LeftIcon } from "../../assets/left_icon.svg";
import {
  registerUserWithEmailAndPassword,
  createUserDocFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase.util";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
};

function SignUp() {
  const navigate = useNavigate();

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signUpWithGoogle = async () => {
    await signInWithGooglePopup();
    navigate(-1);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await registerUserWithEmailAndPassword(email, password);
      await createUserDocFromAuth(user, { displayName });
      resetFormFields();
      navigate(-1);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("email already exists!");
      } else {
        console.log("There is an error creating user:", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full h-full rounded-2xl pt-12">
      <div
        className="absolute top-4 left-4 flex items-center p-4 bg-white rounded-full border border-neutral-50 shadow cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <LeftIcon className="h-5 w-5" />
      </div>
      <div className="flex flex-col justify-center items-center pb-6">
        <p className="text-center text-3xl text-neutral-700 font-bold">
          Sign Up
        </p>
        <p className="text-center text-neutral-500 font-medium mt-3">
          Hey, Enter your details to register your <br /> account
        </p>
      </div>
      <div className="mx-8 mb-5">
        <input
          className="rounded-lg w-full h-12 py-2 px-4 text-sm text-neutral-500 leading-tight bg-bgwhite border border-neutral-200 focus:bg-neutral-50 focus:outline-none placeholder:text-sm"
          id="displayName"
          type="text"
          value={displayName}
          name="displayName"
          placeholder="Enter Full Name *"
          onChange={handleChange}
          required
        />
      </div>
      <div className="mx-8 mb-5">
        <input
          className="rounded-lg w-full h-12 py-2 px-4 text-sm text-neutral-500 leading-tight bg-bgwhite border border-neutral-200 focus:bg-neutral-50 focus:outline-none placeholder:text-sm"
          id="email"
          type="email"
          value={email}
          name="email"
          placeholder="Enter Email *"
          onChange={handleChange}
          required
        />
      </div>
      <div className="mx-8 mb-5">
        <input
          className="rounded-lg w-full h-12 py-2 px-4 text-sm text-neutral-500 leading-tight bg-bgwhite border border-neutral-200 focus:bg-neutral-50 focus:outline-none placeholder:text-sm"
          id="password"
          type="password"
          value={password}
          name="password"
          placeholder="Create Password *"
          onChange={handleChange}
          required
        />
      </div>
      <div className="mx-8 mb-5">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 text-magic-600"
            required
          />
          <span className="ml-2 text-sm text-neutral-700">
            I agree to the{" "}
            <a
              href="https://blisskart.in/"
              className="font-medium hover:underline hover:underline-offset-2"
            >
              terms and conditions
            </a>
          </span>
        </label>
      </div>
      <div className="w-full flex items-center justify-between px-8">
        <button
          className="w-full h-12 text-white font-bold py-2 px-4 rounded-lg bg-magic-600 hover:bg-magic-800 focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Register
        </button>
      </div>
      <div className="flex flex-col justify-center items-center mt-5 mx-8">
        <div className="flex flex-col justify-center">
          <p className="text-sm font-medium">&#8212; Or Sign Up with &#8212;</p>
          <div
            className="flex justify-center items-center mt-4 py-2 px-4 rounded-lg border border-neutral-200 cursor-pointer hover:bg-neutral-50"
            onClick={signUpWithGoogle}
          >
            <Google className="w-5 h-5" />
            <p className="px-3">Google</p>
          </div>
        </div>
      </div>
    </form>
  );
}

export default SignUp;
