"use client";
import React, { useState } from "react";

const Experience = () => {
  const [showForm, setShowForm] = useState(false);
  const [experience, setExperience] = useState({
    company: "",
    position: "",
    duration: "",
  });
  const [experienceList, setExperienceList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperience((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setExperienceList((prevList) => [...prevList, experience]);
    setExperience({ company: "", position: "", duration: "" });
    setShowForm(false);
  };

  return (
    <div className="flex w-full flex-col gap-6">
      {/* Header and Add Button */}
      <div className="flex flex-row items-center justify-between">
        <div className="text-xl font-bold">Experience</div>
        <button
          type="button"
          onClick={() => setShowForm((prev) => !prev)}
          className="rounded-lg bg-[#2D8FA5] px-4 py-2 text-white hover:bg-gray-700"
        >
          + Add
        </button>
      </div>

      {/* Form for adding experience */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-lg border p-4 bg-gray-50"
        >
          <div>
            <label className="block text-sm font-medium">Company</label>
            <input
              type="text"
              name="company"
              value={experience.company}
              onChange={handleChange}
              className="mt-1 w-full rounded border border-gray-300 p-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Position</label>
            <input
              type="text"
              name="position"
              value={experience.position}
              onChange={handleChange}
              className="mt-1 w-full rounded border border-gray-300 p-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Duration</label>
            <input
              type="text"
              name="duration"
              value={experience.duration}
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

      {/* Display saved experience entries */}
      <div className="flex flex-col gap-4">
        {experienceList.map((exp, index) => (
          <div
            key={index}
            className="rounded border border-gray-300 bg-white p-4 shadow-sm"
          >
            <div className="font-semibold">{exp.company}</div>
            <div>{exp.position}</div>
            <div className="text-sm text-gray-500">
              Duration: {exp.duration}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
