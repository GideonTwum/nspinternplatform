"use client";

import React, { useEffect, useState } from "react";
import Select from "react-select";

const SchoolSelect = () => {
  const [options, setOptions] = useState([]);
  const [selectedSchool, setSelectedSchool] = useState(null);

  useEffect(() => {
    
    fetch("http://universities.hipolabs.com/search?country=Ghana")
      .then((res) => res.json())
      .then((data) => {
        
        const formatted = data.map((school) => ({
          value: school.name,
          label: school.name,
        }));

        
        formatted.sort((a, b) => a.label.localeCompare(b.label));
        setOptions(formatted);
      })
      .catch((err) => console.error("Failed to fetch school list:", err));
  }, []);

  return (
    <div className="w-full max-w-md ">
      <label className="block mb-2 text-sm font-semibold text-gray-700">
        Instituition
      </label>
      <Select
        options={options}
        value={selectedSchool}
        onChange={setSelectedSchool}
        placeholder="Search and select your school..."
        isSearchable
      />
    </div>
  );
};

export default SchoolSelect;
