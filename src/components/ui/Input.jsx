import { forwardRef } from "react";

export const Input = forwardRef(({ label, type = "text", error, id, autoComplete, disabled, ...props }, ref ) => {
    return (
      <div className="flex flex-col md:flex-row w-full">
        <label htmlFor={id} className="md:w-1/4 text-md font-medium text-gray-800 mt-3">
          {label}
        </label>
        <div className="md:w-3/4 w-full">
          <input
            ref={ref}
            type={type}
            id={id}
            disabled={disabled}
            autoComplete={autoComplete}
            aria-invalid={error ? "true" : "false"}
            aria-describedby={error ? `${id}-error` : undefined}
            className={`w-full border rounded-lg px-4 py-4 outline-none transition shadow-sm ${
              disabled ? "bg-gray-100 text-gray-400 border-gray-200" : ""
            } ${error ? "border-red-700 focus:ring-1 focus:ring-red-700" : "border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"}`}
            {...props}
          />
          {error && (
            <div id={`${id}-error`} className="text-red-700 text-sm mt-2" role="alert">
              {error.message}
            </div>
          )}
        </div>
      </div>
    );
  }
);
