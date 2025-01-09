import React from "react";
import EditableField from "./EditableField";

const EducationSection = ({ education, updateEducation }) => {
  return (
    <section className="education-section">
      <h2>Education</h2>
      {education.map((item, index) => (
        <div key={index} className="education-item">
          <EditableField
            text={`${item.degree} at ${item.institution} (${item.year})`}
            onSave={(text) => {
              const updated = [...education];
              updated[index] = { ...item, degree: text };
              updateEducation(updated);
            }}
          />
        </div>
      ))}
    </section>
  );
};

export default EducationSection;
