import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PersonalDetailsForm from './components/personalDetailsForm';
import PersonalDetailsDisplay from './components/personalDetailsDisplay';
import EducationDetailsForm from './components/educationDetailsForm';
import EducationDetailsDisplay from './components/educationDetailsDisplay';
import WorkExperienceForm from './components/workExperienceForm';
import WorkExperienceDisplay from './components/workExperienceDisplay';

function App() {
  // Personal details
  const [personalDetailsFormData, setPersonalDetailsFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    placeOfBirth: '',
  });

  const handlePersonalDetailsFormSubmit = (data) => {
    setPersonalDetailsFormData(data);
  };

  // Education details
  const [educationForms, setEducationForms] = useState([
    { id: uuidv4(), schoolName: '', titleOfStudy: '', startDate: '', endDate: '' },
  ]);

  const handleEducationFormSubmit = (id, formData) => {
    setEducationForms((currentForms) =>
      currentForms.map((form) => (form.id === id ? { ...formData, id: form.id } : form))
    );
  };

  const handleAddEducationForm = () => {
    const newForm = {
      id: uuidv4(),
      schoolName: '',
      titleOfStudy: '',
      startDate: '',
      endDate: '',
    };
    setEducationForms([...educationForms, newForm]);
  };

  // Work experience
  const [workExperienceForms, setWorkExperienceForms] = useState([
    {
      id: uuidv4(),
      companyName: '',
      positionTitle: '',
      jobResponsibilities: '',
      startDate: '',
      endDate: '',
    },
  ]);

  const handleWorkExperienceFormSubmit = (id, formData) => {
    setWorkExperienceForms((currentForms) =>
      currentForms.map((form) => (form.id === id ? { ...formData, id: form.id } : form))
    );
  };

  const handleAddWorkExperienceForm = () => {
    const newForm = {
      id: uuidv4(),
      companyName: '',
      positionTitle: '',
      jobResponsibilities: '',
      startDate: '',
      endDate: '',
    };
    setWorkExperienceForms([...workExperienceForms, newForm]);
  };

  return (
    <>
      <div className="left">
        <PersonalDetailsForm onFormSubmit={handlePersonalDetailsFormSubmit} />
        {educationForms.map((form) => (
          <EducationDetailsForm
            key={form.id}
            formId={form.id}
            formData={form}
            onFormSubmit={(formData) => handleEducationFormSubmit(form.id, formData)}
          />
        ))}
        <button onClick={handleAddEducationForm}>Add More Education</button>

        {workExperienceForms.map((form) => (
          <WorkExperienceForm
            key={form.id}
            formId={form.id}
            formData={form}
            onFormSubmit={(formData) => handleWorkExperienceFormSubmit(form.id, formData)}
          />
        ))}
        <button onClick={handleAddWorkExperienceForm}>Add More Work Experience</button>
      </div>

      <div className="right">
        <PersonalDetailsDisplay formData={personalDetailsFormData} />
        <h1>Education Information:</h1>
        {educationForms.map((form) => (
          <>
            <EducationDetailsDisplay key={form.id} formData={form} />
            <br />
          </>
        ))}
        <h1>Work Experience:</h1>
        {workExperienceForms.map((form) => (
          <>
            <WorkExperienceDisplay key={form.id} formData={form} />
            <br />
          </>
        ))}
      </div>
    </>
  );
}

export default App;
