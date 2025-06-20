"use client";
import { useState } from "react";

const Instituition = () => {
  const [form, setForm] = useState({
    instituite: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div className="flex w-full flex-col items-start justify-start gap-4">
      <label htmlFor="city" className="block mb-1">
        Select your tertiary institution *
      </label>
      <div className="relative flex w-full flex-col gap-2.5">
        <select
          id="instituite"
          name="instituite"
          value={form.instituite}
          onChange={handleChange}
          className="flex justify-start w-full border border-gray-300 rounded h-10 px-3 py-2"
          required
        >
          <option value="">Select Instituition</option>
          <option value="accra">Ashesi</option>
          <option value="tema">Valley View University</option>
        </select>
      </div>
    </div>
  );
};

export default Instituition;
