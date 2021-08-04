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

axios.defaults.baseURL = "https://shop-49287-default-rtdb.firebaseio.com";

export const fetchContacts = () => async (dispatch) => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get("/contacts.json");
    dispatch(
      fetchContactsSuccess(
        Object.keys(data).map((key) => ({ id: key, ...data[key] }))
      )
    );
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};

export const addNewContact = (contact) => async (dispatch) => {
  dispatch(addContactRequest());
  try {
    const { data } = await axios.post("/contacts.json", contact);
    dispatch(addContactSuccess({ id: data.name, ...contact }));
  } catch (error) {
    dispatch(addContactError(error));
  }
};

export const removeContact = (contactId) => async (dispatch) => {
  dispatch(removeContactRequest());

  try {
    await axios.delete(`/contacts/${contactId}.json`);
    dispatch(removeContactSuccess(contactId));
  } catch (error) {
    dispatch(removeContactError(error));
  }
};
//==============================================================

// axios
// .get("/contacts.json")
// .then(({ data }) =>
//   dispatch(
//     fetchContactsSuccess(
//       Object.keys(data).map((key) => ({
//         id: key,
//         ...data[key],
//       }))
//     )
//   )
// )
// .catch((error) => dispatch(fetchContactsError(error)));

// axios
//   .post("/contacts.json", contact)
//   .then(
//     ({ data }) => dispatch(addContactSuccess({ id: data.name, ...contact }))
//     // dispatch({ type: "contacts/addContactSuccess", payload: data })
//   )
//   .catch(
//     (error) => dispatch(addContactError(error))
//     // dispatch({ type: "contacts/addContactError", payload: error })
//   );

// axios
//   .delete(`/contacts/${contactId}.json`)
//   .then(() => dispatch(removeContactSuccess(contactId)))
//   .catch((error) => dispatch(removeContactError(error)));
