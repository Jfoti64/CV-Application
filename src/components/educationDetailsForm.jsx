import { useState } from 'react';
import Input from './input';

function EducationDetailsForm({ onFormSubmit }) {
  const [localFormData, setLocalFormData] = useState({
    schoolName: '',
    titleOfStudy: '',
    startDate: '',
    endDate: '',
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
    console.log(localFormData);
    onFormSubmit(localFormData);
  };

  return (
    <form onSubmit={handleSubmit} className="personalDetailsForm">
      <Input
        label="School: "
        name="schoolName"
        value={localFormData.schoolName}
        onChange={handleChange}
      />
      <Input
        label="Title of study: "
        name="titleOfStudy"
        value={localFormData.titleOfStudy}
        onChange={handleChange}
      />
      <Input
        type="date"
        label="Start date: "
        name="startDate"
        value={localFormData.startDate}
        onChange={handleChange}
      />
      <Input
        type="date"
        label="End date: "
        name="endDate"
        value={localFormData.endDate}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default EducationDetailsForm;
