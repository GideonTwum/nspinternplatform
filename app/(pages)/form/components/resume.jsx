import React from "react";

const Resume = () => {
  return (
    <div className="flex w-full flex-col items-start justify-start gap-8">
      <div>
        <div className="text-xl font-bold">Resume *</div>
      </div>

      <div className="flex h-40 w-full flex-row items-center justify-start gap-5">
        <div className="flex h-24 w-full border-spacing-8 flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-[#D39660] bg-[#F1F1F1]">
          <div>
            {" "}
            <span className="text-blue-600 underline">Choose a file</span> or
            drop it
          </div>
          <div className="text-sm text-gray-500">10MB size limit</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
