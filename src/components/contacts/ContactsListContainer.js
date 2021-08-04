import { connect } from "react-redux";
import ContactsList from "./ContactsList";
import { removeContact, onFilterRender } from "../../redux/contacts";
// import { removeContact } from "../../redux/contacts/contacts-operations";
// import { onFilterRender } from "../../redux/contacts/contacts-selectors";

const mapStateToProps = (state) => ({
  contacts: onFilterRender(state),
});

const mapDispatchToProps = (dispatch) => ({
  removeContact: (id) => dispatch(removeContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
//==================================

// const mapStateToProps = ({ contacts: { contacts, filter } }) => ({
//   contacts: onFilterRender(contacts, filter),
// });
