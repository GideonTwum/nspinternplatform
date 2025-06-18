"use client";

import React from "react";
import TextInput from "@/app/components/input/text-input";
import PhoneInputComponent from "./../../../components/PhoneInputComponent"; // <-- update this path
import "react-phone-input-2/lib/style.css";

const PersonalInfo = () => {
  const [form, setForm] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    country: "",
    phone: "",
  });

  const [confirmEmail, setConfirmEmail] = React.useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    if (name === "confirmEmail") {
      setConfirmEmail(value);
    }
  };

  const handlePhoneChange = (phone) => {
    setForm({
      ...form,
      phone: phone,
    });
  };

  return (
    <div className="flex w-full flex-col items-start justify-start gap-4">
      <div>
        <div className="text-xl font-bold">Personal Information</div>
        <div className="text-base font-normal">
          Fields marked with * are required.
        </div>
      </div>

      <div className="grid w-full grid-cols-2 items-center justify-start gap-10">
        {/* First Name */}
        <TextInput
          label={"First Name*"}
          value={form.firstName}
          type={"text"}
          name={"firstName"}
          onChange={handleChange}
        />
        {/* Last Name */}
        <TextInput
          label={"Last Name*"}
          value={form.lastName}
          type={"text"}
          name={"lastName"}
          onChange={handleChange}
        />
        {/* Email */}
        <TextInput
          label={"Email*"}
          value={form.email}
          type={"email"}
          name={"email"}
          onChange={handleChange}
          error={
            form.email.includes("@") && form.email.length !== 0
              ? ""
              : "Enter a valid email"
          }
        />
        {/* Confirm Email */}
        <TextInput
          label={"Confirm Email*"}
          value={confirmEmail}
          type={"email"}
          name={"confirmEmail"}
          onChange={handleChange}
          error={
            form.email !== confirmEmail && confirmEmail.length !== 0
              ? "Email does not match"
              : ""
          }
        />
        {/* City */}
        <TextInput
          label={"City*"}
          value={form.city}
          type={"text"}
          name={"city"}
          onChange={handleChange}
        />
        {/* Phone Number - replaced with PhoneInputComponent */}
        <div className="flex flex-col">
          <label className="mb-1 font-semibold">Phone number*</label>
          <PhoneInputComponent
            value={form.phone}
            onChange={handlePhoneChange}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
