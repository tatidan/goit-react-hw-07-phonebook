import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  onSearchFilter,
} from "./contacts-actions";

const contacts = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, action) => {
    console.log(action);
    console.log(state);
    return [...state, action.payload];
  },
  [removeContactSuccess]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [removeContactRequest]: () => true,
  [removeContactSuccess]: () => false,
  [removeContactError]: () => false,
});

const filter = createReducer("", {
  [onSearchFilter]: (_, action) => action.payload,
});

const error = createReducer(null, {});

export default combineReducers({ contacts, filter, loading, error });
