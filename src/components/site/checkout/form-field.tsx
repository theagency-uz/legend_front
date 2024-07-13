import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { FormFieldProps } from "@/types/user-order";

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
}) => (
  <div
    className={`grid w-full ${textarea ? "" : "max-w-sm"} items-center gap-1.5`}
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

    {error && <span className="error-message">{error.message}</span>}
  </div>
);
export default FormField;
