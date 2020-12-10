import {registrationAPI} from "../api/registrationApi";

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
      alert(errorText)
    });
}