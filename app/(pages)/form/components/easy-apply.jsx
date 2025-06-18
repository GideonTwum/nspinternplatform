"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";

const EasyApply = () => {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");

  const handleChooseFile = () => {
    fileInputRef.current.click(); // Opens file explorer
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      console.log("Uploaded:", file.name);
    }
  };

  return (
    <div className="flex w-full flex-col items-start justify-start gap-8">
      <div>
        <div className="text-xl font-bold">Easy Apply</div>
        <div className="text-base font-normal">
          Choose an option to autocomplete your application. You can still fill
          your profile manually.
        </div>
      </div>

      <div className="flex h-40 w-full flex-row items-center justify-start gap-5">
        <div
          className="flex h-24 w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-[#D39660] bg-[#F1F1F1]"
          onClick={handleChooseFile}
        >
          <div>
            <span className="text-blue-600 underline">Choose a file</span> or
            drop it
          </div>
          <div className="text-sm text-gray-500">
            {fileName ? `Selected: ${fileName}` : "10MB size limit"}
          </div>
        </div>

        {/* Hidden file input */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default EasyApply;
