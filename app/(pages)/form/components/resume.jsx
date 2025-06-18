"use client";
import React, { useState } from "react";

const Resume = () => {
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) validateFile(file);
  };

  const validateFile = (file) => {
    const validTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    const maxSize = 10 * 1024 * 1024; // 10MB

    if (!validTypes.includes(file.type)) {
      setError("Only .pdf or .docx files are allowed.");
      setFileName("");
      return;
    }

    if (file.size > maxSize) {
      setError("File size must not exceed 10MB.");
      setFileName("");
      return;
    }

    setError("");
    setFileName(file.name);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) validateFile(file);
  };

  return (
    <div className="flex w-full flex-col items-start justify-start gap-4">
      <div className="text-xl font-bold">Resume *</div>

      <div
        className="flex h-24 w-full flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-[#D39660] bg-[#F1F1F1] p-4 text-center cursor-pointer"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <label htmlFor="resumeUpload" className="cursor-pointer">
          <span className="text-blue-600 underline">Choose a file</span> or drop
          it
        </label>
        <input
          type="file"
          id="resumeUpload"
          accept=".pdf,.docx"
          onChange={handleFileChange}
          className="hidden"
        />
        <div className="text-sm text-gray-500">10MB size limit</div>
        {fileName && (
          <div className="text-sm text-green-600">Selected: {fileName}</div>
        )}
        {error && <div className="text-sm text-red-500">{error}</div>}
      </div>
    </div>
  );
};

export default Resume;
