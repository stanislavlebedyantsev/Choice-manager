import * as axios from 'axios';

const initState = {
  username: '',
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
        email: state.username,
        password: state.password
      };
      axios
        .post("http://127.0.0.1:8080/auth/login", {
          ...copyState
        })
        .then(response => {
          copyState = {...initState};
          localStorage.setItem('userId', response.data.id);
          window.location.replace('/testing');
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

export const updateLoginTextCreator = (obj) => ({type: 'LOGIN-UPDATE-TEXT', newData: obj});
export const requestLoginCreator = () => ({type: 'LOGIN-REQUEST'});

