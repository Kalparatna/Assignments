import React from "react";
import EditableField from "./EditableField";

const ContactSection = ({ contact, updateContact }) => {
  return (
    <section className="contact-section">
      <h2>Contact Information</h2>
      <div className="contact-details">
        <p>
          Phone:{" "}
          <EditableField
            text={contact.phone}
            onSave={(text) => updateContact({ ...contact, phone: text })}
          />
        </p>
        <p>
          Email:{" "}
          <EditableField
            text={contact.email}
            onSave={(text) => updateContact({ ...contact, email: text })}
          />
        </p>
        <p>
          Address:{" "}
          <EditableField
            text={contact.address}
            onSave={(text) => updateContact({ ...contact, address: text })}
          />
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
