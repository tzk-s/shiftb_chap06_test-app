export const Button = ({ children, variant = "submit", disabled, ...props }) => {
  const baseStyle = "min-w-30 px-4 py-3 font-bold rounded-lg transition shadow-md disabled:cursor-not-allowed";
  const variants = {
    submit: disabled
      ? "bg-gray-400 text-white"
      : "bg-[#1e293b] text-white hover:opacity-90",
    clear: "bg-[#e2e8f0] text-gray-800 hover:bg-gray-300 disabled:opacity-50"
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
