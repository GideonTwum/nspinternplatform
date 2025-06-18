"use client";

import { useState } from "react";

const Apply = () => {
  const [formData, setFormData] = useState({
    role: "",
    date: "",
    citizen:"",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <div className="flex w-full flex-col items-start justify-start gap-4">
      <h1 className="text-xl font-bold mb-4">Application Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* === SELECT DROPDOWN START === */}
        <div>
          <label htmlFor="role" className="block mb-1 ">
            Gender
          </label>
          <div className=" flex w-full flex row items-center justify-start gap-10">
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-[1540px] border p-2 rounded h-10  border-gray-300 px-2"
              required
            >
              <option value=""> Select gender </option>
              <option value="loca">Female</option>
              <option value="loca">Male</option>
            </select>
          </div>
        </div>
        {/* === SELECT DROPDOWN END === */}

        {/* === DATE INPUT START === */}
        <div>
          <label htmlFor="date" className="block mb-1">
            Date of Birth
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="ww-[1520px] border p-2 rounded"
            required
          />
        </div>
        {/* === DATE INPUT END === */}

        <div>
          <label className="block mb-1">Are you a Ghanaian?</label>
          <div className="flex w-full flex-col items-start justify-start gap-4">
            <label className="justify-center items-center">
              <input
                type="radio"
                name="citizen"
                value="Yes"
                checked={formData.citizen === "Yes"}
                onChange={handleChange}
                className="mr-2"
              />
              Yes
            </label>

            <label className="inline-flex items-center">
              <input
                type="radio"
                name="citizen"
                value="No"
                checked={formData.workType === "onsite"}
                onChange={handleChange}
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Apply;
