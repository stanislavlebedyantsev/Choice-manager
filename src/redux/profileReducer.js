import {profileAPI} from "../api/profileApi";

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
      for (let i in copyState.radarChart.data) {
        copyState.radarChart.data[i] = Number(copyState.radarChart.data[i]) / 4;
      }
      return copyState;
    }
    case 'UPDATE-PROFILE-DATA': {
      copyState = {
        ...state
      };
      copyState.userDto = {
        ...action.data
      };
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

export const getProfileData = (data) => ({type: 'GET-PROFILE-DATA', data});
export const profileUpdateText = (data) => ({type: 'UPDATE-PROFILE-DATA', data});
export const toggleIsFetching = (data) => ({type: 'TOGGLE-IS-FETCHING', data});

export const getProfileDataThunkCreator = () => (dispatchEvent) =>{
  toggleIsFetching(true);
  profileAPI.getProfile()
    .then(data => {
      dispatchEvent(getProfileData(data));
      dispatchEvent(toggleIsFetching(false));
    });
}
export const putProfileDataThunkCreator = (data) => (dispatchEvent) =>{
  dispatchEvent(toggleIsFetching(true));
  profileAPI.putProfile(data)
    .then(data => {
      dispatchEvent(toggleIsFetching(false));
    });
}