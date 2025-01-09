import React, { useState } from "react";

const EditableField = ({ text, onSave, placeholder = "Click to edit" }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentText, setCurrentText] = useState(text);

  const handleSave = () => {
    setIsEditing(false);
    onSave(currentText);
  };

  return (
    <span>
      {isEditing ? (
        <textarea
          value={currentText}
          onChange={(e) => setCurrentText(e.target.value)}
          onBlur={handleSave}
          onKeyDown={(e) => e.key === "Enter" && handleSave()}
          autoFocus
          rows={4}
          cols={50}
        />
      ) : (
        <span className="editable-field" onClick={() => setIsEditing(true)}>
          {currentText || placeholder}
        </span>
      )}
    </span>
  );
};

export default EditableField;
