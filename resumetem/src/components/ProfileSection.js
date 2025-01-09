import React, { useState } from "react";
import EditableField from "./EditableField";
import "./ProfileSection.css";

const ProfileSection = ({ data, updateData }) => {
  const [photo, setPhoto] = useState(data.photo);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
        updateData({ ...data, photo: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="profile-section">
      <div className="profile-header">
        <div className="profile-photo">
          <img
            src={photo}
            alt="Profile"
            onClick={() => document.getElementById("fileInput").click()}
          />
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            accept="image/*"
            onChange={handlePhotoChange}
          />
        </div>
        <div className="profile-details">
          <h1>
            <EditableField
              text={data.name}
              onSave={(text) => updateData({ ...data, name: text })}
            />
          </h1>
          <p>
            <EditableField
              text={data.role}
              onSave={(text) => updateData({ ...data, role: text })}
            />
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
