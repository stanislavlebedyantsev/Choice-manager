import {profileAPI} from "../api/profileApi";
import {stopSubmit} from "redux-form";
import {setErrorText} from "./errorReducer";

const GET_PROFILE_DATA = 'choice-manager/profile/GET-PROFILE-DATA';
const TOGGLE_IS_FETCHING = 'choice-manager/profile/TOGGLE-IS-FETCHING';

const initState = {
  userDto: {},
  radarChart: {},
  isFetching: false
};

export const profileReducer = (state = initState, action) => {
  let copyState;
  switch (action.type) {
    case GET_PROFILE_DATA: {
      copyState = {...state};
      copyState = {
        ...action.data
      };
      copyState.userDto.password = '';
      copyState.userDto.passwordConfirmation = '';
      Object.keys(copyState.radarChart.data).map(key => {
        copyState.radarChart.data[key] = Number(copyState.radarChart.data[key]) / 4;
      })
      return copyState;
    }
    case TOGGLE_IS_FETCHING: {
      return {...state, isFetching: action.data};
    }
    default: {
      return state;
    }
  }
};

export const getProfileData = (data) => ({type: GET_PROFILE_DATA, data});
export const toggleIsFetching = (data) => ({type: TOGGLE_IS_FETCHING, data});

export const getProfileDataThunkCreator = () => async (dispatchEvent) => {
  dispatchEvent(toggleIsFetching(true));
  try {
    const response = await profileAPI.getProfile();
    dispatchEvent(getProfileData(response));
  } catch (err) {
    dispatchEvent(stopSubmit('profile', {_error: err.response ? err.response.data : err.message}));
  }
  dispatchEvent(toggleIsFetching(false));
};
export const putProfileDataThunkCreator = (profileData) => async (dispatchEvent) => {
  dispatchEvent(toggleIsFetching(true));
  try {
    await profileAPI.putProfile(profileData);
    dispatchEvent(getProfileDataThunkCreator());
  } catch (err) {
    dispatchEvent(stopSubmit('profile', {_error: 'Smth goes wrong'}));
  }
  dispatchEvent(toggleIsFetching(false));
};
export const updateProfilePhotoThunkCreator = (file) => async (dispatchEvent) => {
  let formData = new FormData();
  formData.append('file', file);
  try{
    await profileAPI.postPhoto(formData);
    dispatchEvent(getProfileDataThunkCreator());
  }catch (err){
    dispatchEvent(setErrorText(err.message));
  }
};
