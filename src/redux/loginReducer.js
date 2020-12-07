import {loginAPI} from "../api/loginApi";
import {setUserData} from "./authReducer";

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

export const loginRequestThunkCreator = (state, authReducer) => (dispatchEvent) => {
  loginAPI.postLogin({...state})
    .then(data => {
      dispatchEvent(loginStateClear())
      dispatchEvent(setUserData({
        accessToken: data.accessToken,
        tokenType: data.tokenType,
        isTested:data.tested
      }))
    })
    .catch(() => {
      //alert("Wrong data. try again");
    }).finally(() => {
  });
}
