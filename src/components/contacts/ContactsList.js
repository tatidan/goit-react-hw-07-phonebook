import React from "react";

const ContactsList = ({ contacts, removeContact }) => {
  return (
    <ul className="contactsList">
      {contacts.map(({ id, name, number }) => (
        <li className="contactsListItem" id={id} key={id}>
          <b className="contactName">{name}:</b>
          {number}
          <button
            className="deleteBtn"
            type="button"
            onClick={() => removeContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
