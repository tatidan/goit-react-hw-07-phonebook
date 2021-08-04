import React, { Component } from "react";
import ContactsForm from "./components/contactsForm/ContactsForm";
import ContactsList from "./components/contacts/ContactsList";
import SearchForm from "./components/searchForm/SearchForm";
import Section from "./components/section/Section";
import "./index.css";
import { connect } from "react-redux";
import { fetchContacts } from "./redux/contacts/contacts-operations";

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <>
        <Section title="Phonebook">
          <ContactsForm />
        </Section>
        <Section title="Contacts">
          <SearchForm />
          {this.props.isLoadingContacts && <h2>Loading contacts...</h2>}
          <ContactsList />
        </Section>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoadingContacts: state.contacts.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
