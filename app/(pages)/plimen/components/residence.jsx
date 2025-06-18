"use client";
import { useState } from "react";
import SelectInput from "../../../components/select-options"; 

const Residence = () => {
  const [form, setForm] = useState({
    city: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const cityOptions = [
    { value: "greater-accra", label: "Greater Accra" },
    { value: "upper-west", label: "Upper West" },
    { value: "ashanti", label: "Ashanti" },
    { value: "central", label: "Central" },
   
  ];

  return (
    <SelectInput
      label="Region of Residence"
      name="city"
      value={form.city}
      onChange={handleChange}
      options={cityOptions}
      error={!form.city ? "Please select a region" : ""}
    />
  );
};

export default Residence;
