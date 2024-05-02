import { useState } from 'react';
import Input from './input';

function EducationDetailsForm({ onFormSubmit, toggleForm, deleteForm, formData }) {
  const [localFormData, setLocalFormData] = useState({
    formId: formData.formId,
    schoolName: formData.schoolName,
    titleOfStudy: formData.titleOfStudy,
    startDate: formData.startDate,
    endDate: formData.endDate,
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
    toggleForm();
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
      <button type="button" onClick={toggleForm}>
        Cancel
      </button>
      <button onClick={deleteForm}>Delete</button>
    </form>
  );
}

export default EducationDetailsForm;
