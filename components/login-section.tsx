"use client";

import { loginSchema } from "@/schema/login-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components//ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { EyeIcon, EyeOffIcon, X } from "lucide-react";

const LoginSection = () => {
  const router = useRouter();
  const [visible, setVisible] = useState<boolean>(false);

  const methods = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    const requestData = {
      email: data.email,
      password: data.password,
    };
    console.log("Request Data", requestData);
  };

  return (
    <div>
      <div className="flex flex-col gap-8 bg-white md:shadow-lg lg:shadow-lg px-8 py-10 rounded-lg max-w-[500px] ">
        <div className="flex flex-col gap-3">
          <div className="text-2xl font-semibold text-[#84012A] text-center">
            Welcome
          </div>
          <p className="text-base font-normal text-center text-[#475467]">
            Please enter following details to login
          </p>
        </div>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col">
              <FormLabel className="block mb-2 text-[#344054] text-sm font-normal">
                Email
              </FormLabel>
              <FormField
                control={methods.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-2 w-full">
                    <FormControl>
                      <Input type="email" placeholder="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col">
              <FormField
                control={methods.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-2 w-full mt-0 space-y-0">
                    <FormLabel className="block mb-2 text-[#344054] text-sm font-normal">
                      {" "}
                      Password
                    </FormLabel>
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
            </div>
            <Button
              type="submit"
              className={`w-full bg-[#84012A] text-white cursor-pointer px-3 py-4 rounded-lg}`}
            >
              Login
            </Button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default LoginSection;
