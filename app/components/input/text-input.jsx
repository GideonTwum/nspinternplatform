

const TextInput = ({
  label,
  value,
  name,
  type,
  error,
  onChange,
}) => {
  return (
    <div className="relative flex w-full flex-col gap-2.5">
      <label className="text-base font-semibold">{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="h-10 w-full rounded-md border-[1.5px] border-gray-300 px-2"
      />
      {error && (
        <div className="absolute -bottom-6 text-xs text-red-500">{error}</div>
      )}
    </div>
  )
}

export default TextInput
