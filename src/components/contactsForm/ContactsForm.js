import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewContact, getContacts } from "../../redux/contacts";
// import { addNewContact } from "../../redux/contacts/contacts-operations";
// import { getContacts } from "../../redux/contacts/contacts-selectors";

class ContactsForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.contacts.find(
      (contact) => contact.name.toLowerCase() === this.state.name.toLowerCase()
    )
      ? alert(`Contact with the name ${this.state.name} already exists.`)
      : this.props.addNewContact({ ...this.state });

    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label className="formLabel">
          Name
          <input
            className="nameInput"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="enter name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>

        <label className="formLabel">
          Phone number
          <input
            className="phoneInput"
            type="text"
            name="number"
            placeholder="enter phone number"
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit" className="submitBtn">
          Add contact
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: getContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  addNewContact: (newName) => dispatch(addNewContact(newName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsForm);
