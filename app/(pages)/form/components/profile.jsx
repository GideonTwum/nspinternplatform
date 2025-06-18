"use client";

import React from "react";

import TextInput from "../../../components/input/text-input";

const Profile = () => {
  const [form, setForm] = React.useState({
    linkedIn: "",
    facebook: "",
    twitter: "",
    website: "",
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
        <div className="text-xl font-bold">Your Profiles</div>
        <div className="text-base font-normal">
          Fields marked with * are required.
        </div>
      </div>

      <div className="grid w-full grid-cols-2 items-center justify-start gap-10">
        {/* firstname */}
        <TextInput
          label={"LinkedIn"}
          value={form.linkedIn}
          type={"text"}
          name={"firstName"}
          onChange={(e) => handleChange(e)}
        />
        <TextInput
          label={"Facebook"}
          value={form.facebook}
          type={"text"}
          name={"lastName"}
          onChange={(e) => handleChange(e)}
        />
        <TextInput
          label={"X (aka Twitter)"}
          value={form.twitter}
          type={"link"}
          name={"twitter"}
          onChange={(e) => handleChange(e)}
        />

        <TextInput
          label={"Snapchat"}
          value={form.website}
          type={"text"}
          name={"website"}
          onChange={(e) => handleChange(e)}
        />
      </div>
    </div>
  );
};

export default Profile;
