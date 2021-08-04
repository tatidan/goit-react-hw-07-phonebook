import React, { Component } from "react";
import { connect } from "react-redux";
import ContactsForm from "./components/contactsForm/ContactsForm";
import SearchForm from "./components/searchForm/SearchForm";
import ContactsListContainer from "./components/contacts/ContactsListContainer";
import Section from "./components/section/Section";
import { fetchContacts, getLoading } from "./redux/contacts";
import "./index.css";
// import { fetchContacts } from "./redux/contacts/contacts-operations";
// import { getLoading } from "./redux/contacts/contacts-selectors";

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
          <ContactsListContainer />
        </Section>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoadingContacts: getLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
