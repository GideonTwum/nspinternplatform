"use client";
import { useState } from "react";

const City = () => {
  const [form, setForm] = useState({
    city: "",
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
      <label htmlFor="city" className="">
        City of Residence *
      </label>
      <div className="w-full">
        <select
          id="city"
          name="city"
          value={form.city}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded h-10 px-3 py-2"
          required
        >
          <option value="" disabled hidden>
            Select City
          </option>
          <option value="Accra">Accra</option>
          <option value="Tema">Tema</option>
          <option value="Kumasi">Kumasi</option>
          <option value="Cape Coast">Cape Coast</option>
          <option value="Tamale">Tamale</option>
          <option value="Takoradi">Takoradi</option>
          <option value="Sunyani">Sunyani</option>
          <option value="Ho">Ho</option>
          <option value="Bolgatanga">Bolgatanga</option>
          <option value="Wa">Wa</option>
        </select>
      </div>
    </div>
  );
};

export default City;
