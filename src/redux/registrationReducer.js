import {registrationAPI} from "../api/registrationApi";

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
      registrationAPI.postRegistration(copyState)
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

export const registrationUpdateText = (newData) => ({type: 'REGISTRATION-UPDATE-TEXT', newData});
export const registrationRequest = () => ({type: 'REGISTRATION-REQUEST'});