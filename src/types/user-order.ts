import { FieldError, UseFormRegister } from "react-hook-form";

export type FormData = {
  name: string;
  surname: string;
  phone: string;
  city: string;
  street: string;
  house: string | number;
  entrance: string | number;
  floor: string | number;
  flat: string | number;
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
