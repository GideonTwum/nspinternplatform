"use client";
import React, { useState } from "react";

const EducationInformation = () => {
  const [showForm, setShowForm] = useState(false);
  const [education, setEducation] = useState({
    institution: "",
    degree: "",
    year: "",
  });
  const [educationList, setEducationList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add the current education to the list
    setEducationList((prevList) => [...prevList, education]);

    // Reset the form
    setEducation({ institution: "", degree: "", year: "" });

    // Hide the form
    setShowForm(false);
  };

  return (
    <div className="flex w-full flex-col gap-6">
      {/* Header and Add Button */}
      <div className="flex flex-row items-center justify-between">
        <div className="text-xl font-bold">Education Information</div>
        <button
          type="button"
          onClick={() => setShowForm((prev) => !prev)}
          className="rounded-lg bg-[#2D8FA5] px-4 py-2 text-white hover:bg-gray-700"
        >
          + Add
        </button>
      </div>

      {/* Conditionally render the form */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-lg border p-4 bg-gray-50"
        >
          <div>
            <label className="block text-sm font-medium">Institution</label>
            <input
              type="text"
              name="institution"
              value={education.institution}
              onChange={handleChange}
              className="mt-1 w-full rounded border border-gray-300 p-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Degree</label>
            <input
              type="text"
              name="degree"
              value={education.degree}
              onChange={handleChange}
              className="mt-1 w-full rounded border border-gray-300 p-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Year</label>
            <input
              type="text"
              name="year"
              value={education.year}
              onChange={handleChange}
              className="mt-1 w-full rounded border border-gray-300 p-2"
              required
            />
          </div>

          <button
            type="submit"
            className="rounded bg-[#2D8FA5] px-4 py-2 text-white hover:bg-[#1b6a81]"
          >
            Save
          </button>
        </form>
      )}

      {/* Display Submitted Education List */}
      <div className="flex flex-col gap-4">
        {educationList.map((edu, index) => (
          <div
            key={index}
            className="rounded border border-gray-300 bg-white p-4 shadow-sm"
          >
            <div className="font-semibold">{edu.institution}</div>
            <div>{edu.degree}</div>
            <div className="text-sm text-gray-500">Year: {edu.year}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationInformation;
