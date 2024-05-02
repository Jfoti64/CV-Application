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
    {
      id: uuidv4(),
      schoolName: '',
      titleOfStudy: '',
      startDate: '',
      endDate: '',
      isVisible: true,
    },
  ]);

  const handleEducationFormSubmit = (id, formData) => {
    setEducationForms((currentForms) =>
      currentForms.map((form) => (form.id === id ? { ...form, ...formData } : form))
    );
  };

  const handleAddEducationForm = () => {
    const newForm = {
      id: uuidv4(),
      schoolName: '',
      titleOfStudy: '',
      startDate: '',
      endDate: '',
      isVisible: true,
    };
    setEducationForms([...educationForms, newForm]);
  };

  const handleRemoveEducationForm = (id) => {
    setEducationForms(educationForms.filter((form) => form.id !== id));
  };

  const toggleEducationFormVisibility = (id) => {
    setEducationForms((currentForms) =>
      currentForms.map((form) => (form.id === id ? { ...form, isVisible: !form.isVisible } : form))
    );
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
      isVisible: true,
    },
  ]);

  const handleWorkExperienceFormSubmit = (id, formData) => {
    setWorkExperienceForms((currentForms) =>
      currentForms.map((form) => (form.id === id ? { ...form, ...formData } : form))
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
      isVisible: true,
    };
    setWorkExperienceForms([...workExperienceForms, newForm]);
  };

  const handleRemoveWorkExperienceForm = (id) => {
    setWorkExperienceForms(workExperienceForms.filter((form) => form.id !== id));
  };

  const toggleWorkExperienceFormVisibility = (id) => {
    setWorkExperienceForms((currentForms) =>
      currentForms.map((form) => (form.id === id ? { ...form, isVisible: !form.isVisible } : form))
    );
  };

  return (
    <>
      <div className="left">
        <PersonalDetailsForm onFormSubmit={handlePersonalDetailsFormSubmit} />
        {educationForms.map((form) =>
          form.isVisible ? (
            <React.Fragment key={form.id}>
              <EducationDetailsForm
                formId={form.id}
                formData={form}
                onFormSubmit={(formData) => handleEducationFormSubmit(form.id, formData)}
                toggleForm={() => toggleEducationFormVisibility(form.id)}
                deleteForm={() => handleRemoveEducationForm(form.id)}
              />
            </React.Fragment>
          ) : (
            <button key={form.id} onClick={() => toggleEducationFormVisibility(form.id)}>
              {form.schoolName === '' ? 'Edit' : 'Edit: ' + form.schoolName}
            </button>
          )
        )}
        <button onClick={handleAddEducationForm}>Add More Education</button>

        {workExperienceForms.map((form) =>
          form.isVisible ? (
            <WorkExperienceForm
              key={form.id}
              formId={form.id}
              formData={form}
              onFormSubmit={(formData) => handleWorkExperienceFormSubmit(form.id, formData)}
              toggleForm={() => toggleWorkExperienceFormVisibility(form.id)}
              deleteForm={() => handleRemoveWorkExperienceForm(form.id)}
            />
          ) : (
            <button key={form.id} onClick={() => toggleWorkExperienceFormVisibility(form.id)}>
              {form.companyName === '' ? 'Edit' : 'Edit: ' + form.companyName}
            </button>
          )
        )}
        <button onClick={handleAddWorkExperienceForm}>Add More Work Experience</button>
      </div>

      <div className="right">
        <PersonalDetailsDisplay formData={personalDetailsFormData} />
        <h1>Education Information:</h1>
        {educationForms.map((form) => (
          <React.Fragment key={form.id}>
            <EducationDetailsDisplay formData={form} />
            <br />
          </React.Fragment>
        ))}
        <h1>Work Experience:</h1>
        {workExperienceForms.map((form) => (
          <React.Fragment key={form.id}>
            <WorkExperienceDisplay formData={form} />
            <br />
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

export default App;
