import React from "react";
import EditableField from "./EditableField";

const AchievementsSection = ({ achievements, updateAchievements }) => {
  return (
    <section className="achievements-section">
      <h2>Achievements</h2>
      {achievements.map((item, index) => (
        <div key={index} className="achievement-item">
          <EditableField
            text={item}
            onSave={(text) => {
              const updated = [...achievements];
              updated[index] = text;
              updateAchievements(updated);
            }}
          />
        </div>
      ))}
    </section>
  );
};

export default AchievementsSection;
