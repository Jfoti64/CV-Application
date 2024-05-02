function EducationDetailsDisplay({ formData }) {
  return (
    <div className="educationDetails">
      <p>School Name: {formData.schoolName}</p>
      <p>Title of Study: {formData.titleOfStudy}</p>
      <p>Start date: {formData.startDate}</p>
      <p>End date: {formData.endDate}</p>
    </div>
  );
}

export default EducationDetailsDisplay;
