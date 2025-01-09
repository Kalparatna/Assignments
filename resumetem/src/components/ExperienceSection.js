import React from "react";
import EditableField from "./EditableField";

const ExperienceSection = ({ experience, updateExperience }) => {
  return (
    <section className="experience-section">
      <h2>Work Experience</h2>
      {experience.map((item, index) => (
        <div key={index} className="experience-item">
          <EditableField
            text={`${item.position} at ${item.company} (${item.years})`}
            onSave={(text) => {
              const updated = [...experience];
              updated[index] = { ...item, position: text };
              updateExperience(updated);
            }}
          />
          <p>
            <EditableField
              text={item.details}
              onSave={(text) => {
                const updated = [...experience];
                updated[index] = { ...item, details: text };
                updateExperience(updated);
              }}
            />
          </p>
        </div>
      ))}
    </section>
  );
};

export default ExperienceSection;
