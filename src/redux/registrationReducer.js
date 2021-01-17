import {registrationAPI} from "../api/registrationApi";
import {hideError} from "./errorReducer";
import {stopSubmit} from "redux-form";

const initState = {
  isRegistrationSuccess: false
};
const REGISTRATION_STATE_CLEAR = 'choice-manager/registration/REGISTRATION-STATE-CLEAR';
const REGISTRATION_SUCCESS = 'choice-manager/registration/REGISTRATION-SUCCESS';

export const registrationReducer = (state = initState, action) => {
  switch (action.type) {
    case REGISTRATION_STATE_CLEAR: {
      return initState;
    }
    case REGISTRATION_SUCCESS: {
      return {...state, isRegistrationSuccess: true};
    }
    default:
      return state;
  }

};

export const registrationStateClear = () => ({type: REGISTRATION_STATE_CLEAR});
export const toggleIsRegistrationSuccess = () => ({type: REGISTRATION_SUCCESS});

export const registrationRequestThunkCreator = (registrationData) => async (dispatchEvent) => {
  try {
    await registrationAPI.postRegistration(registrationData);
    dispatchEvent(toggleIsRegistrationSuccess());
    dispatchEvent(registrationStateClear());
    dispatchEvent(hideError());
  } catch (err) {
    dispatchEvent(stopSubmit('registration', {_error: !err.response
        ? err.message : Object.values(err.response.data)}));
  }
};