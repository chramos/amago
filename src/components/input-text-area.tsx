export type TextAreaProps = {
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  placeholder?: string;
  rows?: number;
  required?: boolean;
};

const TextArea = ({
  value,
  onChange,
  label,
  placeholder,
  rows = 4,
  required,
}: TextAreaProps) => {
  return (
    <div>
      {!!label ? (
        <label
          htmlFor="comment"
          className="block text-sm font-medium text-gray-700"
        >
          Add your comment
        </label>
      ) : null}
      <div className="mt-1">
        <textarea
          rows={rows}
          className="block w-full p-4 rounded-lg font-museo shadow-sm border-0 focus:border-secondary-100 focus:ring-secondary-100 placeholder:text-gray-400"
          defaultValue={""}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          required
        />
      </div>
    </div>
  );
};

export default TextArea;
