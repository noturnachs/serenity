function TextArea({ label, ...props }) {
  return (
    <div>
      {label && <label className="block text-gray-800 mb-2">{label}</label>}
      <textarea
        className="w-full p-3 border border-gray-200
          rounded-lg bg-white
          text-gray-800
          focus:outline-none focus:border-emerald-600 
          placeholder:text-gray-400
          transition-colors"
        {...props}
      />
    </div>
  );
}

export default TextArea;
