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
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phoneNumber: '555-1234',
    placeOfBirth: 'Springfield',
    isVisible: true, // Set to true to show the form by default
  });

  const handlePersonalDetailsFormSubmit = (data, callback) => {
    setPersonalDetailsFormData(data, callback);
  };

  const togglePersonalDetailsFormVisibility = () => {
    setPersonalDetailsFormData((prevState) => ({
      ...prevState,
      isVisible: !prevState.isVisible,
    }));
  };

  // Education details
  const [educationForms, setEducationForms] = useState([
    {
      id: uuidv4(),
      schoolName: 'Springfield University',
      titleOfStudy: 'Computer Science',
      startDate: '2019-08-01',
      endDate: '2023-05-01',
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
      companyName: 'Tech Innovations Inc.',
      positionTitle: 'Software Developer',
      jobResponsibilities:
        'Developed and maintained client websites using JavaScript, React, and CSS.',
      startDate: '2023-06-01',
      endDate: '2024-05-01',
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
        {personalDetailsFormData.isVisible ? (
          <PersonalDetailsForm
            onFormSubmit={(formData) => handlePersonalDetailsFormSubmit(formData)}
            toggleForm={() => togglePersonalDetailsFormVisibility()}
            formData={personalDetailsFormData}
          />
        ) : (
          <button onClick={() => togglePersonalDetailsFormVisibility()}>
            {'Edit Personal Details '}
          </button>
        )}
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
        <div className="workExperience">
          <h1>Work Experience:</h1>
          {workExperienceForms.map((form) => (
            <React.Fragment key={form.id}>
              <WorkExperienceDisplay formData={form} />
              <br />
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
