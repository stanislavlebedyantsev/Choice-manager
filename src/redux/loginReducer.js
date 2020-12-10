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
      return initState;
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
      dispatchEvent(loginStateClear());
      localStorage.setItem('tokenType', data.tokenType);
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('isAuth', true);
      localStorage.setItem('isTested', data.tested);
      /*dispatchEvent(setUserData({
        accessToken: data.accessToken,
        tokenType: data.tokenType,
        isTested:data.tested
      }))*/
      if(data.tested) window.location.href= '/goals'
      if(!data.tested) window.location.href= '/testing'

    })
    .catch((err) => {
      const error = err.response.data.error;
      let errorText = '';
      errorText += error;
      alert(errorText);
    });
};
