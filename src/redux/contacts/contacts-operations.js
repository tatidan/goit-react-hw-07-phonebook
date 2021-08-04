import axios from "axios";
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
} from "./contacts-actions";

axios.defaults.baseURL = "https://shop-49287-default-rtdb.firebaseio.com/";

export const fetchContacts = () => (dispatch) => {
  dispatch(fetchContactsRequest());

  axios
    .get("contacts.json")
    .then(({ data }) =>
      dispatch(
        fetchContactsSuccess(
          Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }))
        )
      )
    )
    .catch((error) => dispatch(fetchContactsError(error)));
};

export const addNewContact = (contact) => (dispatch) => {
  dispatch(addContactRequest());

  axios
    .post("contacts.json", contact)
    .then(
      ({ data }) => dispatch(addContactSuccess({ id: data.name, ...contact }))
      // dispatch({ type: "contacts/addContactSuccess", payload: data })
    )
    .catch(
      (error) => dispatch(addContactError(error))
      // dispatch({ type: "contacts/addContactError", payload: error })
    );
};

export const removeContact = (contactId) => (dispatch) => {
  dispatch(removeContactRequest());

  axios
    .delete(`contacts/${contactId}.json`)
    .then(() => dispatch(removeContactSuccess(contactId)))
    .catch((error) => dispatch(removeContactError(error)));
};
