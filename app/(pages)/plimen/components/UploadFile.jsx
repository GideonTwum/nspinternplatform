"use client";
import React, { useRef, useState } from "react";

const Uploads = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);

  const validExtensions = [
    "doc",
    "dot",
    "rmr",
    "rsm",
    "resume",
    "oxps",
    "pdf",
    "p7s",
    "ai",
    "rtf",
    "pages",
    "gdoc",
    "gslides",
    "xls",
    "xlsm",
    "pub",
    "msg",
    "ppt",
    "wps",
    "ods",
    "odt",
    "pptx",
    "ppsx",
    "xlsx",
    "docx",
    "dotx",
    "sxw",
    "wpd",
    "abw",
    "mp3",
    "m4a",
    "wav",
    "psd",
    "eml",
    "ical",
    "ics",
    "ifb",
    "icalendar",
    "ics_response",
    "csv",
    "txt",
    "text",
    "vcf",
    "mp4",
    "mov",
    "bmp",
    "gif",
    "jfif",
    "jpeg",
    "jpg",
    "png",
    "tif",
    "tiff",
    "webp",
  ];

  const maxSize = 10 * 1024 * 1024; // 10MB per file
  const maxFiles = 5;

  const isValidExtension = (filename) => {
    const ext = filename.split(".").pop().toLowerCase();
    return validExtensions.includes(ext);
  };

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    let validFiles = [];
    let errors = [];

    // Combine old + new files (but max 5)
    const combinedFiles = [...selectedFiles, ...newFiles].slice(0, maxFiles);

    combinedFiles.forEach((file) => {
      if (!isValidExtension(file.name)) {
        errors.push(`${file.name} is not a supported file type.`);
      } else if (file.size > maxSize) {
        errors.push(`${file.name} exceeds 10MB size limit.`);
      } else {
        validFiles.push(file);
      }
    });

    if (errors.length) {
      setError(errors.join(" "));
    } else {
      setSelectedFiles(validFiles);
      setError("");
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    handleFileChange({ target: { files } });
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex w-full flex-col items-start justify-start gap-8">
      <div className="space-y-4">
        <div className="text-lg whitespace-pre-line leading-relaxed">
          {`Upload required documents
              
              Name the attached files accordingly. (e.g. Kwesi Asare_CV, Kwesi Asare_Photo, Kwesi Asare
              -Ghana Card)

              (1) Latest copy of your CV (required)
              (2) Scanned copy of valid Ghana Card (required)
              (3) Scanned copy of internship letter (required).`}
          {/* Click on{" "}
          <span
            className="text-blue-600 underline cursor-pointer"
            onClick={openFileDialog}
          >
            ADD ATTACHMENT
          </span>{" "}
          below and attach the required documents */}
        </div>
      </div>

      <div className="flex w-full flex-col items-start justify-start gap-5">
        <div
          className="flex h-44 w-full flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-[#D39660] bg-[#F1F1F1] p-5 cursor-pointer"
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          onClick={openFileDialog}
        >
          <div>
            <span className="text-blue-600 underline">Choose a file</span> or
            drop it
          </div>
          <input
            type="file"
            id="file-upload"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
            multiple
            accept={validExtensions.map((ext) => "." + ext).join(",")}
          />
          <div className="text-sm">Up to 5 files, 10MB each</div>
          <div className="text-sm text-gray-500">
            Supported files: {validExtensions.join(", ").toUpperCase()}
          </div>

          {selectedFiles.length > 0 && (
            <div className="text-sm text-green-600 text-left w-full mt-2">
              <strong>Selected Files:</strong>
              <ul className="list-disc list-inside">
                {selectedFiles.map((file, index) => (
                  <li key={index}>{file.name}</li>
                ))}
              </ul>
            </div>
          )}

          {error && <div className="text-sm text-red-500 mt-2">{error}</div>}
        </div>

        <div className="flex items-start space-x-2">
          <input type="checkbox" id="agree" className="w-4 h-4" required />
          <label htmlFor="agree" className="text-m">
            I hereby certify that the information provided in this application
            is true to the best of my knowledge. I understand that any false
            statements may result in disqualification or termination.
          </label>
        </div>
      </div>
    </div>
  );
};

export default Uploads;
