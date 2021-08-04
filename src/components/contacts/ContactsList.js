import React from "react";
import { connect } from "react-redux";
import { removeContact } from "../../redux/contacts/contacts-operations";

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

const onFilterRender = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};

const mapStateToProps = ({ contacts: { contacts, filter } }) => ({
  contacts: onFilterRender(contacts, filter),
});

const mapDispatchToProps = (dispatch) => ({
  removeContact: (id) => dispatch(removeContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
