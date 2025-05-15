import SignUpSection from "@/components/sign_up/sign_up_section";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    // Main container
    <div className="flex flex-col justify-between items-stretch">
      {/* Bottom background */}
      <div className="absolute bottom-0 h-2/4 w-full md:bg-[#FFE7E7] lg:bg-[#CFDBD5] bg-[#CFDBD5]"></div>
      {/* Centered form container with responsive padding */}
      <div className="flex flex-col gap-5 absolute top-1/3 left-[50%] md:max-w-[500px] lg:max-w-[500px] w-full transform -translate-x-1/2 -translate-y-1/4 md:p-8 lg:p-8  ">
        {/* Form card with shadow and rounded corners */}
        <div className="flex flex-col gap-8 bg-white md:shadow-lg lg:shadow-lg px-8 py-10 rounded-lg max-w-[500px] ">
          {/* Header section */}
          <div className="flex flex-col gap-3">
            <div className="text-2xl font-semibold text-[#069B99] text-center">
              Welcome
            </div>
            <p className="text-base font-normal text-center text-[#475467]">
              Please enter following details to sign up
            </p>
          </div>
          {/* Sign Up form Component */}
          <SignUpSection />
          {/* Login link for users with an account */}
          <div className=" text-center text-sm">
            Already have an account?{" "}
            <Link href="./" className="underline underline-offset-4">
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
