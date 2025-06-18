"use client";
import React, { useState } from "react";

const Uploads = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");
  const [fileName, setFileName] = useState("");

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

  const maxSize = 10 * 1024 * 1024; // 10MB

  const isValidExtension = (filename) => {
    const ext = filename.split(".").pop().toLowerCase();
    return validExtensions.includes(ext);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!isValidExtension(file.name)) {
      setError("Unsupported file type.");
      setFileName("");
      return;
    }

    if (file.size > maxSize) {
      setError("File size exceeds 10MB limit.");
      setFileName("");
      return;
    }

    setSelectedFile(file);
    setFileName(file.name);
    setError("");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) handleFileChange({ target: { files: [file] } });
  };

  return (
    <div className="flex w-full flex-col items-start justify-start gap-8">
      <div className="space-y-4">
        <div className="text-lg whitespace-pre-line leading-relaxed">
          {`Upload required documents
              
Name the attached files accordingly. (e.g. John Doe_CV, John Doe_Photo, John Doe_ID Card)

(1) Latest copy of your CV (required)
(2) Scanned copy of valid ID Card (required)
(3) Scanned copy of internship letter (required)

Click on ADD ATTACHMENT below and attach the required documents.`}
        </div>
      </div>

      <div className="flex w-full flex-col items-start justify-start gap-5">
        <div
          className="flex h-30 w-full flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-[#D39660] bg-[#F1F1F1] p-5 cursor-pointer"
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          <label htmlFor="file-upload" className="text-blue-600 underline">
            Choose a file
          </label>{" "}
          or drop it
          <input
            type="file"
            id="file-upload"
            className="hidden"
            onChange={handleFileChange}
            accept={validExtensions.map((ext) => "." + ext).join(",")}
          />
          <div className="text-sm">10MB size limit</div>
          <div className="text-sm text-gray-500">
            Supported files: DOC, DOT, RMR, RSM, RESUME, OXPS, PDF, P7S, AI,
            RTF, PAGES, GDOC, GSLIDES, XLS, XLSM, PUB, MSG, PPT, WPS, ODS, ODT,
            PPTX, PPSX, XLSX, DOCX, DOTX, SXW, WPD, ABW, MP3, M4A, WAV, PSD,
            EML, ICAL, ICS, IFB, ICALENDAR, ICS_RESPONSE, CSV, TXT, TEXT, VCF,
            MP4, MOV, BMP, GIF, JFIF, JPEG, JPG, PNG, TIF, TIFF, WEBP
          </div>
          {fileName && (
            <div className="text-sm text-green-600">Selected: {fileName}</div>
          )}
          {error && <div className="text-sm text-red-500">{error}</div>}
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
