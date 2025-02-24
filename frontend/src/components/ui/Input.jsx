function Input({ type = "text", label, ...props }) {
  return (
    <div>
      {label && <label className="block text-emerald-100 mb-2">{label}</label>}
      <input
        type={type}
        className="w-full p-3 border border-emerald-700 
          rounded-lg bg-emerald-800
          text-emerald-100
          focus:outline-none focus:border-emerald-500 
          placeholder:text-emerald-300
          transition-colors"
        {...props}
      />
    </div>
  );
}

export default Input;
