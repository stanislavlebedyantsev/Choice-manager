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
    case 'REGISTRATION-STATE-CLEAR': {
      return initState;
    }
    default:
      return state;
  }

};

export const registrationUpdateText = (newData) => ({type: 'REGISTRATION-UPDATE-TEXT', newData});
export const registrationStateClear = () => ({type: 'REGISTRATION-STATE-CLEAR'});

export const registrationRequestThunkCreator = (state) => (dispatchEvent) => {
  registrationAPI.postRegistration(state)
    .then(response => {
      dispatchEvent(registrationStateClear)
    })
    .then(() => {
      //change it to normal redirect
      window.location.href = '/login';
    })
    .catch(() => {
      alert("smth goes wrong");
    });
}