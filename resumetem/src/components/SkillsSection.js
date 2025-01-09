import React from "react";
import EditableField from "./EditableField";

const SkillsSection = ({ skills, updateSkills }) => {
  const handleSkillsSave = (newText) => {
    // Split the skills by newline and update the skills object
    const newSkills = {
      ...skills,
      technical: newText.split("\n").map((skill) => skill.trim()).filter(Boolean),
    };
    updateSkills(newSkills);
  };

  return (
    <section className="skills-section">
      <h2>Skills</h2>

      {/* Editable field for all skills */}
      <div className="skills-category">
        <h3>Technical Skills</h3>
        <EditableField
          text={skills.technical.join("\n")}
          onSave={handleSkillsSave}
          placeholder="Add your technical skills here, each on a new line."
        />
      </div>

      {/* Similar editable fields for other skill categories */}
      <div className="skills-category">
        <h3>Tools & Libraries</h3>
        <EditableField
          text={skills.toolsLibraries.join("\n")}
          onSave={(newText) => handleSkillsSave(newText)}
          placeholder="Add tools & libraries here."
        />
      </div>

      <div className="skills-category">
        <h3>Databases</h3>
        <EditableField
          text={skills.databases.join("\n")}
          onSave={(newText) => handleSkillsSave(newText)}
          placeholder="Add databases here."
        />
      </div>

      <div className="skills-category">
        <h3>Web Development</h3>
        <EditableField
          text={skills.webDevelopment.join("\n")}
          onSave={(newText) => handleSkillsSave(newText)}
          placeholder="Add web development skills here."
        />
      </div>
    </section>
  );
};

export default SkillsSection;
