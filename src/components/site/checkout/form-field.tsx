import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useTranslation } from "@/lib/i18n/client";

import { FormFieldProps } from "@/types/user-order";
import { TriangleAlert } from "lucide-react";

const FormField: React.FC<FormFieldProps> = ({
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber,
  label,
  required,
  textarea,
  lang,
}) => {
  const { t } = useTranslation(lang);

  return (
    <div
      className={`grid flex-1 ${
        textarea ? "" : "max-w-sm"
      } items-center gap-1.5 small-normal-nospacing`}
    >
      <Label className="" htmlFor={name}>
        {label}
      </Label>
      {textarea ? (
        <Textarea
          id={name}
          placeholder={placeholder}
          required={required ?? false}
          className="resize-none w-full h-48"
          {...register(name, { valueAsNumber })}
        />
      ) : (
        <Input
          id={name}
          placeholder={placeholder}
          type={type}
          className="max-sm:h-[35px]"
          required={required ?? false}
          {...register(name, { valueAsNumber })}
        />
      )}

      <span
        className={`text-xs text-yellow-200 flex items-center gap-2 mt-2 ${
          error ? "" : "hidden"
        }`}
      >
        <TriangleAlert width={17} />{" "}
        {error ? t(error.message ?? "") : "required"}
      </span>
    </div>
  );
};
export default FormField;
