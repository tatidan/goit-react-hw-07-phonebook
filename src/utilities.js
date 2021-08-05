// // Pseudo code
// const action = (dispatch) => {
//   const onSuccess = (result) =>
//     dispatch({ type: "OPERATION_SUCCESS", payload: result });
//   const onError = (error) =>
//     dispatch({ type: "OPERATION_ERROR", error: true, payload: error });

//   return promise.then(onSuccess, onError);
// };
// dispatch(action);

// // utilities

// function checkStatus(response) {
//   if (response.status >= 200 && response.status < 300) {
//     return response;
//   } else {
//     const error = new Error(response.statusText);
//     error.response = response;
//     throw error;
//   }
// }

// function parseJSON(response) {
//   return response.json();
// }

// export function post(url, data) {
//   const options = {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   };
//   return fetch(url, options).then(checkStatus).then(parseJSON);
// }

// // action creators

// // import { post } from "./utils";

// export function submitForm(data) {
//   return (dispatch) =>
//     post("/myform", data).then(
//       (response) =>
//         dispatch({
//           type: "SUBMIT_FORM_SUCCESS",
//           payload: response,
//         }),
//       (error) =>
//         dispatch({
//           type: "SUBMIT_FORM_FAILURE",
//           error: error,
//           suppressGlobalErrorNotification:
//             error.response && error.response.status === 400,
//         })
//     );
// }

// // reducers

// export function error(state = null, action) {
//   if (!action.error || action.suppressGlobalErrorNotification) {
//     return state;
//   }
//   if (action.type === "RESET_ERROR") {
//     return null;
//   }
//   return action.error;
// }

// export function form(state = {}, action) {
//   switch (action.type) {
//     case "SUBMIT_FORM_FAILURE":
//       return Object.assign({}, state, { isFormError: true });
//     // ...
//     default:
//       return state;
//   }
// }
