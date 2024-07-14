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
      className={`grid w-full ${
        textarea ? "" : "max-w-sm"
      } items-center gap-1.5`}
    >
      <Label className="max-xs:small-medium" htmlFor={name}>
        {label}
      </Label>
      {textarea ? (
        <Textarea
          id={name}
          placeholder={placeholder}
          required={required ?? false}
          className="resize-none w-full"
          {...register(name, { valueAsNumber })}
        />
      ) : (
        <Input
          id={name}
          placeholder={placeholder}
          type={type}
          required={required ?? false}
          {...register(name, { valueAsNumber })}
        />
      )}

      <span
        className={`text-sm text-yellow-200 flex items-center gap-2 mt-2 ${
          error ? "" : "opacity-0"
        }`}
      >
        <TriangleAlert width={17} />{" "}
        {error ? t(error.message ?? "") : "required"}
      </span>
    </div>
  );
};
export default FormField;
