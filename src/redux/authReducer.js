import {loginAPI} from "../api/loginApi";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'choice-manager/auth/SET-USER-DATA';
const TOGGLE_IS_TESTED = 'choice-manager/auth/TOGGLE-IS-TESTED';
const LOGOUT = 'choice-manager/auth/LOGOUT';

let initState = {
  accessToken: null,
  tokenType: null,
  isAuth: false,
  isTested: false
};

export const authReducer = (state = initState, action) => {
  //let copyState;
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data,
        isTested: action.data.tested,
        isAuth: true
      };
    }
    case TOGGLE_IS_TESTED: {
      return {...state, isTested: true};
    }
    case LOGOUT: {
      sessionStorage.clear();
      return initState;
    }
    default:
      return state;
  }
};

export const setUserData = (data) => ({type: SET_USER_DATA, data});
export const toggleIsTested = (data) => ({type: TOGGLE_IS_TESTED, data});
export const logout = () => ({type: LOGOUT});


export const loginRequestThunkCreator = (formData) => async (dispatchEvent) => {
  try {
    let response = await loginAPI.postLogin({...formData});
    dispatchEvent(setUserData(response));
    sessionStorage.setItem('tokenType', response.tokenType);
    sessionStorage.setItem('accessToken', response.accessToken);
    sessionStorage.setItem('isAuth', 'true');
    sessionStorage.setItem('isTested', response.tested);
    if (response.tested) window.location.href = '/goals';
    if (!response.tested) window.location.href = '/testing';
  } catch (err) {
    dispatchEvent(stopSubmit('login', {_error: !err.response
        ? err.message : Object.values(err.response.data.error)}));
  }
};