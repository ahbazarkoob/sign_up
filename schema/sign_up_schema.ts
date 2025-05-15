import { z } from "zod";

// Sign up schema for validating user input during signup
export const signUpSchema = z
  .object({
    firstName: z.string().min(2, "First Name must be at least 2 characters."),
    lastName: z.string().min(2, "Last Name must be at least 2 characters."),
    email: z.string().email({ message: "Invalid email address" }),
    phoneNumber: z.string().refine(
      (num) => {
        return num.length >= 10 && /^\d{10,}$/.test(num);
      },
      {
        message:
          "Invalid phone number format. At least 10 digits are required.",
      }
    ),
    newPassword: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter",
      })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter",
      })
      .regex(/\d/, { message: "Password must contain at least one number" })
      .regex(/[\W_]/, {
        message: "Password must contain at least one special character",
      }),
    confirmPassword: z.string().min(8, {
      message:
        "Password should have 8+ characters, including a letter, number, and special character.",
    }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
