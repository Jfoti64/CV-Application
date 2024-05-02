import { useState } from 'react';
import Input from './input';

function WorkExperienceForm({ onFormSubmit }) {
  const [localFormData, setLocalFormData] = useState({
    companyName: '',
    positionTitle: '',
    jobResponsibilities: '',
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
        label="Company Name: "
        name="companyName"
        value={localFormData.companyName}
        onChange={handleChange}
      />
      <Input
        label="Position Title: "
        name="positionTitle"
        value={localFormData.positionTitle}
        onChange={handleChange}
      />
      <Input
        label={'Job Responsibilities'}
        name="jobResponsibilities"
        value={localFormData.jobResponsibilities}
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

export default WorkExperienceForm;
