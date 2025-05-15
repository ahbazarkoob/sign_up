import { z } from "zod";

// Login schema for validating user input during login
export const loginSchema = z.object({
    email:  z.string().email({ message: "Invalid email address" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters long" })
});
