import React from "react";
import { connect } from "react-redux";
import { onSearchFilter, getFilter } from "../../redux/contacts";
// import { onSearchFilter } from "../../redux/contacts/contacts-actions";
// import { getFilter } from "../../redux/contacts/contacts-selectors";

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
  filter: getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSearchHandler: (e) => dispatch(onSearchFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
