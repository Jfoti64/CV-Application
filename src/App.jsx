import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PersonalDetailsForm from './components/personalDetailsForm';
import PersonalDetailsDisplay from './components/personalDetailsDisplay';
import EducationDetailsForm from './components/educationDetailsForm';
import EducationDetailsDisplay from './components/educationDetailsDisplay';

function App() {
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
      </div>
    </>
  );
}

export default App;
