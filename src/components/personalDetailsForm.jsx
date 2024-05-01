import React, { useState } from 'react';

function PersonalDetailsForm({ onFormSubmit }) {
  const [localFormData, setLocalFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    placeOfBirth: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(localFormData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="First name: "
        name="firstName"
        value={localFormData.firstName}
        onChange={handleChange}
      />
      <Input
        label="Last name: "
        name="lastName"
        value={localFormData.lastName}
        onChange={handleChange}
      />
      <Input label="Email: " name="email" value={localFormData.email} onChange={handleChange} />
      <Input
        label="Phone Number: "
        name="phoneNumber"
        value={localFormData.phoneNumber}
        onChange={handleChange}
      />
      <Input
        label="Place of Birth: "
        name="placeOfBirth"
        value={localFormData.placeOfBirth}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

function Input({ label, name, value, onChange }) {
  return (
    <div>
      <label>
        {label}
        <input type="text" name={name} value={value} onChange={onChange} />
      </label>
    </div>
  );
}

export default PersonalDetailsForm;
