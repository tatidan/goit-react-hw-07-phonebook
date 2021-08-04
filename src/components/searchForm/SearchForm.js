import React from "react";
import { connect } from "react-redux";
import { onSearchFilter } from "../../redux/contacts/contacts-actions";

const SearchForm = ({ onSearchHandler, filter }) => {
  return (
    <label className="searchFormLabel">
      Find contacts by name
      <input
        className="searchField"
        type="text"
        name="name"
        placeholder="enter name"
        value={filter}
        onChange={onSearchHandler}
      />
    </label>
  );
};

const mapStateToProps = (state) => ({
  filter: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onSearchHandler: (e) => dispatch(onSearchFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
