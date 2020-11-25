import * as axios from 'axios';

const initState = {
  user: {
    /*name: '',
    surname: '',
    email: '',
    password:'',
    passwordConfirmation:''*/
  },
  radarChart: {}
};

export const profileReducer = (state = initState, action) => {
  let copyState;
  switch (action.type) {
    case 'GET-PROFILE-DATA': {
      copyState = {...state};
      copyState = {
        ...action.data
      };
      copyState.user.password = '';
      copyState.user.passwordConfirmation = '';

      localStorage.setItem('username', copyState.user.username);
      localStorage.setItem('email', copyState.user.email);
      for (let i in copyState.radarChart.data) {
        copyState.radarChart.data[i] = Number(copyState.radarChart.data[i]) / 5;
      }
      console.log(copyState.radarChart.data);
      return copyState;
    }
    case 'UPDATE-PROFILE-DATA': {
      copyState = {
        ...state
      };
      copyState.user = {
        ...action.data
      };
      console.log(copyState);
      return copyState;
    }
    case 'PUT-PROFILE-DATA': {
      copyState = {
        ...state
      };
      axios
        .put(`http://127.0.0.1:8080/profile`, copyState.user,
          {
            headers: {
              accessKey: localStorage.getItem('accessKey')
            }
          })
      return copyState;
    }
    default: {
      return state;
    }
  }
};

export const requestProfileData = (data) => ({type: 'GET-PROFILE-DATA', data});
export const updateProfileData = (data) => ({type: 'UPDATE-PROFILE-DATA', data});
export const profilePutOnApi = () => ({type: 'PUT-PROFILE-DATA'});