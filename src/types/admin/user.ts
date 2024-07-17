import { z, ZodType } from "zod";

export enum UserRole {
  Admin = "admin",
  Customer = "customer",
}

export interface IUser {
  id: number;
  name: string;
  role: "admin" | "customer";
}

export const UserLoginSchema: ZodType<IUserLogin> = z.object({
  email: z.string().min(1, { message: "required" }),
  password: z.string().min(1, { message: "required" }),
});

export interface IUserLogin {
  email: string;
  password: string;
}
