import {profileAPI} from "../api/profileApi";
import {stopSubmit} from "redux-form";

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
      for (let i in copyState.radarChart.data) {
        copyState.radarChart.data[i] = Number(copyState.radarChart.data[i]) / 4;
      }
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
  } catch (e) {
    stopSubmit('profile', {_error: e.response.data});
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
  await profileAPI.postPhoto(formData);
  dispatchEvent(getProfileDataThunkCreator());
};
