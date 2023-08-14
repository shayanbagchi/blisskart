import React from "react";
import NavBar from "../Navigation/navbar.component";
import Login from "./login.component";
import SignUp from "./signup.component";

function User() {
  return (
    <div className="h-screen font-poppins bg-magic-200 bg-opacity-30 overflow-auto">
      <NavBar />
      <div className="flex flex-col justify-center items-center mt-[2%]">
        <div className="w-full md:w-[420px] rounded-3xl bg-white shadow-xl">
          {/* <Login /> */}
          <SignUp />
            <div className="flex justify-center items-center mt-5 mx-8 mb-12">
              <p className="text-sm font-normal mr-1">
                Already have an account?
              </p>
              <a
                className="text-sm font-medium hover:underline hover:underline-offset-2"
                href="https://blisskart.in/"
              >
                Login here
              </a>
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
