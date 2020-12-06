import {loginAPI} from "../api/loginApi";
import {registrationAPI} from "../api/registrationApi";
import {registrationStateClear} from "./registrationReducer";

const initState = {
  usernameOrEmail: '',
  password: '',
  isFetching: false
};

export const loginReducer = (state = initState, action) => {
  let copyState;

  switch (action.type) {
    case 'LOGIN-UPDATE-TEXT': {
      copyState = action.newData;
      return copyState;
    }
    //fix async troubles
    case 'LOGIN-STATE-CLEAR': {
      copyState = {
        ...state
      };

      return copyState;
    }
    case 'TOGGLE-IS-FETCHING': {
      return {...state, isFetching: action.data};
    }
    default:
      return state;
  }

};

export const toggleIsFetching = (data) => ({type: 'TOGGLE-IS-FETCHING', data});
export const loginUpdateText = (newData) => ({type: 'LOGIN-UPDATE-TEXT', newData});
export const loginStateClear = () => ({type: 'LOGIN-STATE-CLEAR'});

export const loginRequestThunkCreator = (state) => (dispatchEvent) => {
  loginAPI.postLogin({...state})
    .then(data => {
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('tokenType', data.tokenType);
      window.location.href = '/testing';
      dispatchEvent(loginStateClear)
    })
    .catch(() => {
      //alert("Wrong data. try again");
    }).finally(() => {
  });
}
