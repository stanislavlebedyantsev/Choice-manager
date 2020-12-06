import {loginAPI} from "../api/loginApi";

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
    case 'LOGIN-REQUEST': {
      copyState = {
        ...state
      };
      loginAPI.postLogin({...copyState})
        .then(data => {
          copyState = {...initState};
          localStorage.setItem('accessToken', data.accessToken);
          localStorage.setItem('tokenType', data.tokenType);
          window.location.href = '/testing';
          return copyState;
        })
        .catch(() => {
          alert("Wrong data. try again");
        });
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
export const loginRequest = () => ({type: 'LOGIN-REQUEST'});

