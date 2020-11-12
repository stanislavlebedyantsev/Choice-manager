import * as axios from "axios";

const initState = {
  login: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  name: '',
  surname: ''
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
      /*for (let prop in copyState) {
        if (copyState[prop] === '') {
          console.log(prop + 'is empty');
        }
      }*/
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
        .catch(() =>{
          alert("smth goes wrong")
        })
      return copyState;
    }
    default:
      return state;
  }

};

export const updateRegistrationTextCreator = (obj) => ({type: 'REGISTRATION-UPDATE-TEXT', newData: obj});
export const requestRegistrationCreator = () => ({type: 'REGISTRATION-REQUEST'});