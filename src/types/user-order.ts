import { FieldError, UseFormRegister } from "react-hook-form";
import { z, ZodType } from "zod";

import { Language } from "./language";

export const UserSchema: ZodType<FormData> = z.object({
  name: z.string().min(1, { message: "required" }),
  surname: z.string().min(1, { message: "required" }),
  phone: z.string().min(1, { message: "required" }),
  city: z.string().min(1, { message: "required" }),
  street: z.string().min(1, { message: "required" }),
  house: z.string().min(1, { message: "required" }),
  entrance: z.string().min(1, { message: "required" }),
  floor: z.string().min(1, { message: "required" }),
  flat: z.string().min(1, { message: "required" }),
  comment: z.string(),
});

export type FormData = {
  name: string;
  surname: string;
  phone: string;
  city: string;
  street: string;
  house: string;
  entrance: string;
  floor: string;
  flat: string;
  comment?: string;
};

export type FormFieldProps = {
  type?: string;
  placeholder: string;
  name: ValidFieldNames;
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
  label: string;
  required?: boolean;
  pattern?: string;
  textarea?: boolean;
  lang?: keyof Language;
  className?: string;
};

export type ValidFieldNames =
  | "name"
  | "surname"
  | "phone"
  | "city"
  | "street"
  | "house"
  | "entrance"
  | "floor"
  | "flat"
  | "comment";
