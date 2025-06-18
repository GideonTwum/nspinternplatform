import Link from "next/link";
import React from "react";

const EasyApply = () => {
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
        <div className="flex h-24 w-full border-spacing-8 flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-[#D39660] bg-[#F1F1F1]">
          <div>
            <span className="text-blue-600 underline">Choose a file</span> or
            drop it
          </div>
          <div className="text-sm text-gray-500">10MB size limit</div>
        </div>
        {/* <div className="flex ">or</div> */}
        {/* <Link
          target="_blank"
          href={"https://www.indeed.com/"}
          className="h-10 items-center justify-center text-nowrap rounded-full bg-[#266EEB] px-4 py-2 text-center text-white"
        >
          Apply with Indeed
        </Link> */}
      </div>
    </div>
  );
};

export default EasyApply;
