"use client";

import React from "react";
import TextAreaInput from "../../../components/input/text-area-input";

const Message = () => {
  const [form, setForm] = React.useState({
    mesage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div className="flex w-full flex-col items-start justify-start gap-4">
      <div>
        <div className="text-xl font-bold">Message to the Hiring Team</div>
      </div>

      <div className="flex h-40 w-full items-center justify-start">
        {/* firstname */}
        <TextAreaInput
          label={"Let the company know about your interest working there"}
          value={form.mesage}
          type={"text"}
          name={"mesage"}
          onChange={(e) => handleChange(e)}
          placeholder={"Write your message here..."}
          error={undefined}
        />
      </div>
    </div>
  );
};

export default Message;
