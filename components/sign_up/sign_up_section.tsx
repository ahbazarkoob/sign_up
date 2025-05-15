"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Button } from "../ui/button";
import { signUpSchema } from "@/schema/sign_up_schema";

const SignUpSection = () => {
  // Router instance for navigation
  const router = useRouter();
  // State to manage visibility of new password field
  const [showNewPassword, setShowNewPassword] = useState(false);
  // State to manage visibility of confirm password field
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

  // Initialize form with react-hook-form and Zod resolver
  const methods = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  // Destructure form state and control for validation and field watching
  const {
    formState: { isValid },
    control,
  } = methods;

  // Watch newPassword field for real-time validation
  const newPassword = useWatch({
    control,
    name: "newPassword",
  });

  // Watch confirmPassword field for real-time validation
  const confirmPassword = useWatch({
    control,
    name: "confirmPassword",
  });

  // Effect to trigger newPassword validation when it changes
  useEffect(() => {
    const validateNewPassword = async () => {
      if (newPassword) {
        await methods.trigger("newPassword"); // Trigger validation for newPassword field
      }
    };

    validateNewPassword();
  }, [newPassword, methods]);

  // Effect to trigger confirmPassword validation when it or newPassword changes
  useEffect(() => {
    const validateConfirmPassword = async () => {
      if (confirmPassword.length > 0) {
        await methods.trigger("confirmPassword"); // Trigger validation for confirmPassword field
      }
    };

    validateConfirmPassword();
  }, [newPassword, methods, confirmPassword.length]);

  // Handle form submission
  const onSubmit = async () => {
    // Navigate to success page
    router.push("/sucess_page");
  };

  return (
    <div>
      {/* Form Container */}
      <FormProvider {...methods}>
        {/* Form element with submit handler and styling */}
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
        >
          {/* Name fields (first and last name) */}
          <div className="flex flex-col gap-2">
            {/* Label for name inputs */}
            <FormLabel className="block text-[#344054] text-sm font-normal">
              Name
            </FormLabel>
            {/* Container for first and last name inputs */}
            <div className="flex md:flex-row gap-3">
              {/* First name input */}
              <FormField
                control={control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="space-y-4 md:w-64 lg:w-64 w-40 ">
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="First Name"
                        inputMode="text"
                        {...field}
                        className="font-normal text-base capitalize "
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Last name input */}
              <FormField
                control={control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="space-y-4 md:w-64 lg:w-64 w-40 ">
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Last Name"
                        inputMode="text"
                        {...field}
                        className="font-normal text-base capitalize"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          {/* Email field */}
          <div className="flex flex-col gap-2">
            {/* Label for email input */}
            <FormLabel className="block text-[#344054] text-sm font-normal">
              Email
            </FormLabel>
            {/* Email input */}
            <FormField
              control={methods.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2 w-full ">
                  <FormControl>
                    <Input type="email" placeholder="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* Phone number field */}
          <FormField
            control={control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                {/* Label for phone number input */}
                <FormLabel className="block text-[#344054] text-sm font-normal">
                  Contact Number
                </FormLabel>
                <FormControl>
                  {/* Input for phone number with tel input mode */}
                  <Input
                    placeholder="Contact Number"
                    inputMode="tel"
                    value={field.value}
                    onChange={(e) => field.onChange(e.currentTarget.value)}
                    className="font-normal text-base"
                    autoFocus={true}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* New password field */}
          <div className="flex flex-col gap-2">
            {/* Label for new password input */}
            <FormLabel className="block text-[#344054] text-sm font-normal">
              New Password
            </FormLabel>
            {/* New password input with visibility toggle */}
            <FormField
              control={control}
              name="newPassword"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2 w-full">
                  <FormControl>
                    <div className="flex gap-2 border pr-2 rounded-md items-center">
                      <Input
                        type={showNewPassword ? "text" : "password"}
                        className="border-none focus:border-none focus:ring-0 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 "
                        {...field}
                      />
                      {showNewPassword ? (
                        <EyeIcon
                          size={15}
                          onClick={() => {
                            setShowNewPassword(!showNewPassword);
                          }}
                        />
                      ) : (
                        <EyeOffIcon
                          size={15}
                          onClick={() => {
                            setShowNewPassword(!showNewPassword);
                          }}
                        />
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* Confirm password field */}
          <div className="flex flex-col gap-2">
            {/* Label for confirm password input */}
            <FormLabel className="block text-[#344054]  text-sm font-normal">
              Confirm Password
            </FormLabel>
            {/* Confirm password input with visibility toggle */}
            <FormField
              control={control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2 w-full">
                  <FormControl>
                    <div className="flex gap-2 border pr-2 rounded-md items-center">
                      <Input
                        type={showConfirmNewPassword ? "text" : "password"}
                        className="border-none focus:border-none focus:ring-0 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 "
                        {...field}
                        disabled={!newPassword}
                      />
                      {showConfirmNewPassword ? (
                        <EyeIcon
                          size={15}
                          onClick={() => {
                            setShowConfirmNewPassword(
                              !setShowConfirmNewPassword
                            );
                          }}
                        />
                      ) : (
                        <EyeOffIcon
                          size={15}
                          onClick={() => {
                            setShowConfirmNewPassword(!showConfirmNewPassword);
                          }}
                        />
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* Submit button */}
          <Button
            type="submit"
            className="w-full px-3 py-4 rounded-lg hover:bg-[#CFDBD5]"
            style={{
              backgroundColor: isValid ? "#069B99" : "#CFDBD5",
              cursor: isValid ? "pointer" : "not-allowed",
            }}
            disabled={!isValid}
          >
            Continue
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};
export default SignUpSection;
