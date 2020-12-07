import {registrationAPI} from "../api/registrationApi";

const initState = {
  isRegistrationSuccess:false
};

export const registrationReducer = (state = initState, action) => {
  let copyState;

  switch (action.type) {
    case 'REGISTRATION-UPDATE-TEXT': {
      copyState ={
        ...state,
        ...action.newData
      }
      return copyState;
    }
    case 'REGISTRATION-STATE-CLEAR': {
      return initState;
    }
    case 'REGISTRATION-SUCCESS': {
      return {...state, isRegistrationSuccess: true};
    }
    default:
      return state;
  }

};

export const registrationUpdateText = (newData) => ({type: 'REGISTRATION-UPDATE-TEXT', newData});
export const registrationStateClear = () => ({type: 'REGISTRATION-STATE-CLEAR'});
export const toggleIsRegistrationSuccess = () => ({type: 'REGISTRATION-SUCCESS'});

export const registrationRequestThunkCreator = (state) => (dispatchEvent) => {
  registrationAPI.postRegistration(state)
    .then(() => {
      dispatchEvent(toggleIsRegistrationSuccess())
      dispatchEvent(registrationStateClear())
    })
    .catch(() => {
      alert("smth goes wrong");
    });
}