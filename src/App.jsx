import React, { useState } from 'react';
import PersonalDetailsForm from './components/personalDetailsForm';
import PersonalDetailsDisplay from './components/personalDetailsDisplay';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    placeOfBirth: '',
  });

  const handleSubmit = (data) => {
    console.log('Submitted values:', data);
    setFormData(data);
  };

  return (
    <div>
      <PersonalDetailsForm onFormSubmit={handleSubmit} />
      <PersonalDetailsDisplay formData={formData} />
    </div>
  );
}

export default App;
