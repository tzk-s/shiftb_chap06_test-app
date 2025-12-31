// src/components/ui/TextArea.jsx
import { forwardRef } from "react";

export const TextArea = forwardRef(
  ({ label, error, id, rows = "8", disabled, ...props }, ref) => {
    return (
      <div className="flex flex-col md:flex-row w-full">
        <label
          htmlFor={id}
          className="md:w-1/4 text-md font-medium text-gray-800 mt-3"
        >
          {label}
        </label>
        <div className="md:w-3/4 w-full">
          <textarea
            ref={ref}
            id={id}
            disabled={disabled}
            rows={rows}
            aria-invalid={error ? "true" : "false"}
            aria-describedby={error ? `${id}-error` : undefined}
            className={`w-full border rounded-lg px-4 py-3 outline-none transition shadow-sm resize-y ${
              disabled ? "bg-gray-100 text-gray-400 border-gray-200" : ""
            } ${
              error
                ? "border-red-700 focus:ring-1 focus:ring-red-700"
                : "border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            }`}
            {...props}
          />
          {error && (
            <div
              id={`${id}-error`}
              role="alert"
              className="text-red-700 text-sm mt-2"
            >
              {error.message}
            </div>
          )}
        </div>
      </div>
    );
  }
);
