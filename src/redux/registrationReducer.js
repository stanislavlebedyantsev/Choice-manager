import * as axios from "axios";

const initState = {
};

export const registrationReducer = (state = initState, action) => {
  let copyState;

  switch (action.type) {
    case 'REGISTRATION-UPDATE-TEXT': {
      copyState = action.newData;
      return copyState;
    }
    //fix async troubles
    case 'REGISTRATION-REQUEST': {
      copyState = {...state};
      axios
        .post("http://127.0.0.1:8080/registration", {
          ...copyState
        })
        .then(response => {
          copyState = {...initState};
        })
        .then(() => {
          //change it to normal redirect
          window.location.href = '/login';
        })
        .catch(() => {
          alert("smth goes wrong");
        });
      return copyState;
    }
    default:
      return state;
  }

};

export const updateRegistrationTextCreator = (newData) => ({type: 'REGISTRATION-UPDATE-TEXT', newData});
export const requestRegistrationCreator = () => ({type: 'REGISTRATION-REQUEST'});