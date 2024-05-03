function workExperienceDisplay({ formData }) {
  return (
    <div>
      <p>Company Name: {formData.companyName}</p>
      <p>Position Title: {formData.positionTitle}</p>
      <p>Job Responsibilities: {formData.jobResponsibilities}</p>
      <p>Start date: {formData.startDate}</p>
      <p>End date: {formData.endDate}</p>
    </div>
  );
}

export default workExperienceDisplay;
