"use client";
import React, { useState } from "react";

const Experience = () => {
  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const [experience, setExperience] = useState({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    officeLocation: "",
    currentlyWorking: false,
    description: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;

    setExperience((prev) => ({
      ...prev,
      [name]: val,
      // If currentlyWorking is checked, clear endDate immediately
      ...(name === "currentlyWorking" && checked ? { endDate: "" } : {}),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedList = [...experienceList];
      updatedList[editIndex] = experience;
      setExperienceList(updatedList);
    } else {
      setExperienceList((prevList) => [...prevList, experience]);
    }
    resetForm();
  };

  const handleEdit = (index) => {
    setExperience(experienceList[index]);
    setEditIndex(index);
    setShowForm(true);
  };

  const handleCancel = () => {
    resetForm();
  };

  const resetForm = () => {
    setExperience({
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      officeLocation: "",
      currentlyWorking: false,
      description: "",
    });
    setShowForm(false);
    setEditIndex(null);
  };

  const [experienceList, setExperienceList] = useState([]);

  return (
    <div className="flex w-full flex-col gap-6">
      {/* Header and Add Button */}
      <div className="flex flex-row items-center justify-between">
        <div className="text-xl font-bold">Experience</div>
        <button
          type="button"
          onClick={() => {
            resetForm();
            setShowForm(true);
          }}
          className="rounded-lg bg-[#2D8FA5] px-4 py-2 text-white hover:bg-gray-700"
        >
          + Add
        </button>
      </div>

      {/* Form */}
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

          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={experience.startDate}
                onChange={handleChange}
                className="mt-1 w-full rounded border border-gray-300 p-2"
                required
              />
            </div>

            <div className="w-1/2">
              <label className="block text-sm font-medium">End Date</label>
              <input
                type="date"
                name="endDate"
                value={experience.endDate}
                onChange={handleChange}
                className="mt-1 w-full rounded border border-gray-300 p-2"
                disabled={experience.currentlyWorking}
                required={!experience.currentlyWorking}
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="currentlyWorking"
              checked={experience.currentlyWorking}
              onChange={handleChange}
            />
            <label className="text-sm">I currently work here</label>
          </div>

          <div>
            <label className="block text-sm font-medium">Office Location</label>
            <input
              type="text"
              name="officeLocation"
              value={experience.officeLocation}
              onChange={handleChange}
              className="mt-1 w-full rounded border border-gray-300 p-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Description</label>
            <textarea
              name="description"
              value={experience.description}
              onChange={handleChange}
              className="mt-1 w-full rounded border border-gray-300 p-2"
              rows={4}
              required
            />
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="rounded bg-[#2D8FA5] px-4 py-2 text-white hover:bg-[#1b6a81]"
            >
              {editIndex !== null ? "Update" : "Save"}
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="rounded border border-gray-400 px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* Display Saved Experience */}
      <div className="flex flex-col gap-4">
        {experienceList.map((exp, index) => (
          <div
            key={index}
            className="rounded border border-gray-300 bg-white p-4 shadow-sm"
          >
            <div className="font-semibold">{exp.company}</div>
            <div>{exp.position}</div>
            <div className="text-sm text-gray-500">
              {exp.startDate} - {exp.currentlyWorking ? "Present" : exp.endDate}
            </div>
            <div>Office Location: {exp.officeLocation}</div>
            <div className="mt-2 text-sm text-gray-700">{exp.description}</div>
            <button
              onClick={() => handleEdit(index)}
              className="mt-2 text-sm text-blue-600 hover:underline"
            >
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
