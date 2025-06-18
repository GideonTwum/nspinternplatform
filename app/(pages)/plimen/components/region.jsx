"use client";
import { useState } from "react";

const Region= () => {
  const [form, setForm] = useState({
    region: "",
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
        City/Town of residence *
      </label>
      <div className="w-full">
        <select
          id="region"
          name="region"
          value={form.region}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded h-10 px-3 py-2"
          required
        >
          <option value="">Select City</option>
          <option value="accra">Accra</option>
          <option value="tema">Tema</option>
        </select>
      </div>
    </div>
  );
};

export default Region;
