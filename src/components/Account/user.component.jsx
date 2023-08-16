import React, { useState } from "react";
import Login from "./login.component";
import SignUp from "./signup.component";

function User() {
  const [isRegestered, setIsRegestered] = useState(true);

  const toggleUser = () => {
    setIsRegestered(!isRegestered);
  };

  return (
    <div className="h-screen font-poppins bg-magic-200 bg-opacity-30 overflow-auto">
      <div className="flex flex-col justify-center items-center mt-[3%]">
        <div className="w-full md:w-[420px] rounded-3xl bg-white shadow-xl">
          {isRegestered ? <Login /> : <SignUp />}
          <div className="flex justify-center items-center mt-5 mx-8 mb-12">
            <p className="text-sm font-normal mr-1">
              {isRegestered
                ? "Don't have an account?"
                : "Already have an account?"}
            </p>
            <span
              className="text-sm font-medium hover:underline hover:underline-offset-2 cursor-pointer"
              href="https://blisskart.in/"
              onClick={toggleUser}
            >
              {isRegestered ? "Register here" : "Login"}
            </span>
          </div>
        </div>
        <p className="text-center text-zinc-600 my-6">
          &copy; 2023 BlissKart. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default User;
