"use client";

import TextInput from "@/app/components/input/text-input";
import React from "react";


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
  // const [error, setError] = React.useState({
  //   firstName: 'Enter your first name',
  //   lastName: 'Enter your last name',
  //   email: 'Enter a valid email',
  //   confirmEmail: 'Email does not match',
  //   city: 'Select your city',
  //   country: 'Select your country',
  //   phone: 'Enter valid phone number',
  // });

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

  return (
    <div className="flex w-full flex-col items-start justify-start gap-4">
      <div>
        <div className="text-xl font-bold">Personal Information</div>
        <div className="text-base font-normal">
          Fields marked with * are required.
        </div>
      </div>

      <div className="grid w-full grid-cols-2 items-center justify-start gap-10">
        {/* firstname */}
        <TextInput
          label={"First Name*"}
          value={form.firstName}
          type={"text"}
          name={"firstName"}
          onChange={(e) => handleChange(e)}
        />
        <TextInput
          label={"Last Name*"}
          value={form.lastName}
          type={"text"}
          name={"lastName"}
          onChange={(e) => handleChange(e)}
        />
        <TextInput
          label={"Email*"}
          value={form.email}
          type={"email"}
          name={"email"}
          onChange={(e) => handleChange(e)}
          error={
            form.email.includes("@") && form.email.length !== 0
              ? ""
              : "Enter a valid email"
          }
        />

        <TextInput
          label={"Confirm Email*"}
          value={confirmEmail}
          type={"email"}
          name={"confirmEmail"}
          onChange={(e) => handleChange(e)}
          error={
            form.email !== confirmEmail && confirmEmail.length !== 0
              ? "Email does not match"
              : ""
          }
        />
        <TextInput
          label={"City*"}
          value={form.city}
          type={"text"}
          name={"city"}
          onChange={(e) => handleChange(e)}
        />
        <TextInput
          label={"Phone number*"}
          value={form.phone}
          type={"tel"}
          name={"phone"}
          onChange={(e) => handleChange(e)}
        />
      </div>
    </div>
  );
};

export default PersonalInfo;
