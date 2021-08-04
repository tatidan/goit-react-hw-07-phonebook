import { createSelector } from "@reduxjs/toolkit";

export const getLoading = (state) => state.contacts.loading;

export const getContacts = (state) => state.contacts.contacts;

export const getFilter = (state) => state.contacts.filter;

export const onFilterRender = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
);
//=============================

// export const onFilterRender = (state) => {
//   const contacts = getContacts(state);
//   const filter = getFilter(state);

//   const normalizedFilter = filter.toLowerCase();
//   return contacts.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter)
//   );
// };

//=============================

// const onFilterRender = (contacts, filter) => {
//   const normalizedFilter = filter.toLowerCase();

//   return contacts.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter)
//   );
// };
