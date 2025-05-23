"use client";
import LoginSection from "@/components/login/login-section";
import Link from "next/link";

export default function Home() {
  return (
    // Main container
    <div className="flex flex-col items-stretch justify-between">
      {/* Bottom background */}
      <div className="absolute bottom-0 h-2/4 w-full bg-[#CFDBD5]"></div>
      {/* Centered form container with responsive padding */}
      <div className="flex flex-col gap-5 absolute top-1/3 left-[50%] md:max-w-[500px] lg:max-w-[500px] w-full transform -translate-x-1/2 -translate-y-1/4 md:p-8 lg:p-8  ">
        {/* Form card with shadow and rounded corners */}
        <div className="flex flex-col gap-8 bg-white md:shadow-lg lg:shadow-lg px-8 py-10 rounded-lg max-w-[500px] ">
          {/* Header section */}
          <div className="flex flex-col gap-3">
            <div className="text-2xl font-semibold text-[#069B99] text-center">
              Welcome back
            </div>
            <p className="text-base font-normal text-center text-[#475467]">
              Please enter following details to login
            </p>
          </div>
          {/* Login form Component */}
          <LoginSection />
          {/* Signup link for users without an account */}
          <div className=" text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="./sign_up" className="underline underline-offset-4">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
