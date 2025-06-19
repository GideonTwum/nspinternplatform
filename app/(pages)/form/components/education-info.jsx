"use client";
import React, { useState } from "react";
import SchoolSelect from "./../../../components/schools"; // Adjust if needed

const generateYears = (start = 1980, end = new Date().getFullYear()) => {
  const years = [];
  for (let year = end; year >= start; year--) {
    years.push(year);
  }
  return years;
};

const EducationInformation = () => {
  const [showForm, setShowForm] = useState(false);
  const [currentlyAttending, setCurrentlyAttending] = useState(false);
  const [educationList, setEducationList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const [education, setEducation] = useState({
    institution: "",
    degree: "",
    major: "",
    fromYear: "",
    toYear: "",
    currentlyAttending: false,
  });

  const years = generateYears();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;

    setEducation((prev) => ({
      ...prev,
      [name]: val,
    }));

    if (name === "currentlyAttending") {
      setCurrentlyAttending(checked);
      if (checked) {
        setEducation((prev) => ({ ...prev, toYear: "" }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedList = [...educationList];
      updatedList[editIndex] = { ...education };
      setEducationList(updatedList);
    } else {
      setEducationList((prevList) => [...prevList, { ...education }]);
    }

    resetForm();
    setShowForm(false);
  };

  const handleReset = () => {
    resetForm();
  };

  const resetForm = () => {
    setEducation({
      institution: "",
      degree: "",
      major: "",
      fromYear: "",
      toYear: "",
      currentlyAttending: false,
    });
    setCurrentlyAttending(false);
    setEditIndex(null);
  };

  const handleEdit = (index) => {
    const edu = educationList[index];
    setEducation({ ...edu });
    setCurrentlyAttending(edu.currentlyAttending);
    setEditIndex(index);
    setShowForm(true);
  };

  const handleCancel = () => {
    resetForm();
    setShowForm(false);
  };

  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex flex-row items-center justify-between">
        <div className="text-xl font-bold">Education Information</div>
        <button
          type="button"
          onClick={() => {
            handleReset();
            setShowForm((prev) => !prev);
          }}
          className="rounded-lg bg-[#2D8FA5] px-4 py-2 text-white hover:bg-gray-700"
        >
          + Add
        </button>
      </div>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-lg border p-4 bg-gray-50"
        >
          <SchoolSelect
            value={education.institution}
            onChange={(selectedInstitution) =>
              setEducation((prev) => ({
                ...prev,
                institution: selectedInstitution,
              }))
            }
          />

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
            <label className="block text-sm font-medium">Major</label>
            <input
              type="text"
              name="major"
              value={education.major}
              onChange={handleChange}
              className="mt-1 w-full rounded border border-gray-300 p-2"
              required
            />
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium">Start Year</label>
              <select
                name="fromYear"
                value={education.fromYear}
                onChange={handleChange}
                className="mt-1 w-full rounded border border-gray-300 p-2"
                required
              >
                <option value="">Select Year</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-1/2">
              <label className="block text-sm font-medium">End Year</label>
              <select
                name="toYear"
                value={education.toYear}
                onChange={handleChange}
                className="mt-1 w-full rounded border border-gray-300 p-2"
                disabled={currentlyAttending}
                required={!currentlyAttending}
              >
                <option value="">Select Year</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="currentlyAttending"
              checked={currentlyAttending}
              onChange={handleChange}
            />
            <label className="text-sm">I currently attend this school</label>
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

      {/* Display Education List */}
      <div className="flex flex-col gap-4">
        {educationList.map((edu, index) => (
          <div
            key={index}
            className="rounded border border-gray-300 bg-white p-4 shadow-sm"
          >
            <div className="font-semibold">{edu.institution}</div>
            <div>
              {edu.degree} — {edu.major}
            </div>
            <div className="text-sm text-gray-500">
              {edu.fromYear} - {edu.currentlyAttending ? "Present" : edu.toYear}
            </div>
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

export default EducationInformation;
