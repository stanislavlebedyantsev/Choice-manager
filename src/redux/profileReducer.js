import * as axios from 'axios';

const initState = {
  userDto: {
    /*name: '',
    surname: '',
    email: '',
    password:'',
    passwordConfirmation:''*/
  },
  radarChart: {},
  isFetching: false
};

export const profileReducer = (state = initState, action) => {
  let copyState;
  switch (action.type) {
    case 'GET-PROFILE-DATA': {
      copyState = {...state};
      copyState = {
        ...action.data
      };
      copyState.userDto.password = '';
      copyState.userDto.passwordConfirmation = '';
      console.log(copyState);
      localStorage.setItem('username', copyState.userDto.username);
      localStorage.setItem('email', copyState.userDto.email);
      for (let i in copyState.radarChart.data) {
        copyState.radarChart.data[i] = Number(copyState.radarChart.data[i]) / 5;
      }/*
      copyState.radarChart = {
        data: Object.values(copyState.radarChart.data),
        caption: Object.values(copyState.radarChart.caption)
      }*/
      console.log(copyState.radarChart);
      return copyState;
    }
    case 'UPDATE-PROFILE-DATA': {
      copyState = {
        ...state
      };
      copyState.userDto = {
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
        .put(`http://127.0.0.1:8080/profile/put`, copyState.userDto,
          {
            headers: {
              accessToken: localStorage.getItem('accessKey')
            }
          });
      return copyState;
    }
    case 'TOGGLE-IS-FETCHING': {
      return {...state, isFetching: action.data};
    }
    default: {
      return state;
    }
  }
};

export const requestProfileData = (data) => ({type: 'GET-PROFILE-DATA', data});
export const updateProfileData = (data) => ({type: 'UPDATE-PROFILE-DATA', data});
export const profilePutOnApi = () => ({type: 'PUT-PROFILE-DATA'});
export const toggleIsFetching = (data) => ({type: 'TOGGLE-IS-FETCHING', data});