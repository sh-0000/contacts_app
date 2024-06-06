import React from "react";

const ContactsCard = ({ user }) => {
  return (
    <div className="contacts_card">
      <h4>{user.name}</h4>
      <p>{user.phone}</p>
      <p>{user.email}</p>
    </div>
  );
};

export default ContactsCard;
