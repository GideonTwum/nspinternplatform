"use client";
import { useState } from "react";

const Region = () => {
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
      <label htmlFor="region" className="">
        Region of Residence *
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
          <option value="" disabled hidden>
            Select Region
          </option>
          <option value="Ahafo">Ahafo</option>
          <option value="Ashanti">Ashanti</option>
          <option value="Bono">Bono</option>
          <option value="Bono East">Bono East</option>
          <option value="Central">Central</option>
          <option value="Eastern">Eastern</option>
          <option value="Greater Accra">Greater Accra</option>
          <option value="North East">North East</option>
          <option value="Northern">Northern</option>
          <option value="Oti">Oti</option>
          <option value="Savannah">Savannah</option>
          <option value="Upper East">Upper East</option>
          <option value="Upper West">Upper West</option>
          <option value="Volta">Volta</option>
          <option value="Western">Western</option>
          <option value="Western North">Western North</option>
        </select>
      </div>
    </div>
  );
};

export default Region;
