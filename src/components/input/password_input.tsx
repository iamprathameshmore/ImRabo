import React from "react";

interface InputProps {
  label?: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput: React.FC<InputProps> = ({
  label = "Password",
  placeholder = "Enter your password",
  required = true,
  value,
  onChange,
}) => {
  return (
    <div>
      <label
        htmlFor="password"
        className="block text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2 flex items-center">
        <input
          id="password"
          name="password"
          type="password"
          required={required}
          autoComplete="current-password"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="block w-full border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
        />
      </div>
    </div>
  );
};

export default PasswordInput;;
