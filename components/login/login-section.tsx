"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/schema/login-schema";
import { z } from "zod";

const LoginSection = () => {
  // State to manage password visibility
  const [visible, setVisible] = useState<boolean>(false);
  // Router instance for navigation
  const router = useRouter();

  // Initialize form with react-hook-form and Zod resolver
  const methods = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Handle form submission
  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    console.log("Request Data", data);
    // Navigate to success page
    router.push("./sucess_page");
  };

  return (
    // Form container
    <FormProvider {...methods}>
      {/* Form element with submit handler and styling */}
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
      >
        {/* Email field container */}
        <FormField
          control={methods.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-2 w-full">
              {/* Label for email input */}
              <FormLabel className="text-[#344054] text-sm font-normal">
                Email
              </FormLabel>
              {/* Email input field */}
              <FormControl>
                <Input
                  type="email"
                  placeholder="john_doe@exapmle.com"
                  {...field}
                />
              </FormControl>
              {/* Display validation error messages */}
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Password field container */}
        <FormField
          control={methods.control}
          name="password"
          render={({ field }) => (
            // Password input field
            <FormItem className="flex flex-col gap-2 w-full mt-0 space-y-0">
              {/* Label for password input */}
              <FormLabel className="block mb-2 text-[#344054] text-sm font-normal">
                {" "}
                Password
              </FormLabel>
              {/* Password input field with visibility toggle */}
              <FormControl>
                <div className="flex gap-2 border pr-2 rounded-md items-center">
                  <Input
                    type={visible ? "text" : "password"}
                    className="border-none focus:border-none focus:ring-0 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 "
                    {...field}
                  />
                  {visible ? (
                    <EyeIcon
                      size={15}
                      onClick={() => {
                        setVisible(!visible);
                      }}
                    />
                  ) : (
                    <EyeOffIcon
                      size={15}
                      onClick={() => {
                        setVisible(!visible);
                      }}
                    />
                  )}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Submit button */}
        <Button
          type="submit"
          className={`w-full bg-[#069B99] hover:bg-[#CFDBD5] text-white cursor-pointer px-3 py-4 rounded-lg}`}
        >
          Login
        </Button>
      </form>
    </FormProvider>
  );
};

export default LoginSection;
