"use client";
import { useState } from "react";

const Specification = () => {
  const [form, setForm] = useState({
    interest: "",
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
        Choose your preferred specialisation.*
      </label>
      <div className="w-full">
        <select
          id="interest"
          name="interest"
          value={form.interest}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded h-10 px-3 py-2"
          required
        >
          <option value="">Select Interest</option>
          <option value="accra">Data Analytics</option>
          <option value="tema">Backend</option>
        </select>
      </div>
    </div>
  );
};

export default Specification;
