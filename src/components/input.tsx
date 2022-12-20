import { HTMLInputTypeAttribute } from "react";

export type InputProps = {
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  placeholder?: string;
  type: HTMLInputTypeAttribute;
  required?: boolean;
};

const Input = ({
  value,
  onChange,
  label,
  placeholder,
  type,
  required,
}: InputProps) => {
  return (
    <div>
      {!!label ? (
        <label
          htmlFor={type}
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
      ) : null}
      <div className="mt-1">
        <input
          type={type}
          name={type}
          id={type}
          className="block w-full h-14 pl-4 rounded-lg font-museo shadow-sm border-0 focus:border-secondary-100 focus:ring-secondary-100 placeholder:text-gray-400"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          required={required}
        />
      </div>
    </div>
  );
};

export default Input;
