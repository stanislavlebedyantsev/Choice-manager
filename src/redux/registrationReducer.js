import {registrationAPI} from "../api/registrationApi";
import {hideError, setErrorText, toggleIsError} from "./errorReducer";

const initState = {
  username: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  name: '',
  surname: '',
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
    case 'SET-ERROR-TEXT':{
      copyState = {...state}
      copyState.isError = true
      copyState.errorText = action.errorText
      return copyState
    }
    case 'TOGGLE-ERROR':{
      copyState = {...state}
      copyState.isError = !copyState.isError
      return copyState
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
      dispatchEvent(hideError())
    })
    .catch((err) => {
      let errorText=''
      if(err.response){
        const error = err.response.data
        for (let i in error){
          errorText += error[i]
          errorText += '\n'
        }
      }else{
        errorText = 'Server connection error'
      }
      dispatchEvent(toggleIsError())
      dispatchEvent(setErrorText(errorText))
    });
}