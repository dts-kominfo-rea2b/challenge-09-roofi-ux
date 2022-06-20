// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";

const Contact = ({ data }) => {
  const { name, email, phone, photo } = data;
  return (
    <div className="contacts-wrapper">
      <div className="avatar-wrapper">
        <img src={photo} alt="avatar" />
      </div>
      <div className="info-wrapper">
        <p className="info-name">{name}</p>
        <div className="info-content">
          <p className="info-content_phone">{phone}</p>
          <p className="info-content-email">{email}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
