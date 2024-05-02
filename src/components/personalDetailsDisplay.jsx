function PersonalDetailsDisplay({ formData }) {
  return (
    <div className="personalDetails">
      <h1>Personal Information:</h1>
      <p>First Name: {formData.firstName}</p>
      <p>Last Name: {formData.lastName}</p>
      <p>Email: {formData.email}</p>
      <p>Phone Number: {formData.phoneNumber}</p>
      <p>Place of Birth: {formData.placeOfBirth}</p>
    </div>
  );
}

export default PersonalDetailsDisplay;
