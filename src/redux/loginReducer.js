import * as axios from 'axios';

const initState = {
  usernameOrEmail: '',
  password: ''
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
      axios
        .post("http://127.0.0.1:8080/auth/login", {
          ...copyState
        })
        .then(response => {
          copyState = {...initState};
          localStorage.setItem('accessToken', response.data.accessToken);
          localStorage.setItem('tokenType', response.data.tokenType);
          /*window.location.replace('/testing');*/
          console.log(localStorage.getItem('userId'));
          return copyState;
        })
        .catch(() => {
          alert("Wrong data. try again");
        });
      return copyState;

    }
    default:
      return state;
  }

};

export const updateLoginTextCreator = (newData) => ({type: 'LOGIN-UPDATE-TEXT', newData});
export const requestLoginCreator = () => ({type: 'LOGIN-REQUEST'});

