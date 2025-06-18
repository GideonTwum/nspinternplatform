const TextAreaInput = ({ label, value, name, type, error, onChange, placeholder }) => {
  return (
    <div className="relative flex w-full flex-col gap-2.5">
      <label className="text-base font-semibold">{label}</label>
      <textarea
        id={name}
        name={name}
        value={value}
        type={type}
        onChange={onChange}
        rows={5}
        placeholder={placeholder}
        className="border p-2 rounded"
      />
      {error && (
        <div className="absolute -bottom-6 text-xs text-red-500">{error}</div>
      )}
    </div>
  );
};

export default TextAreaInput;
