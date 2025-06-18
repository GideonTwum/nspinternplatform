// components/SelectInput.jsx
const SelectInput = ({ label, name, value, onChange, options = [], error }) => {
  return (
    <div className="relative flex w-full flex-col gap-2.5">
      <label className="text-base font-semibold">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="h-10 w-full rounded-md border-[1.5px] border-gray-300 px-2"
        required
      >
        <option value="">Select {label}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && (
        <div className="absolute -bottom-6 text-xs text-red-500">{error}</div>
      )}
    </div>
  );
};

export default SelectInput;
