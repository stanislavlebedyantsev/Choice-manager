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
      for (let i in copyState.radarChart.data) {
        copyState.radarChart.data[i] = Number(copyState.radarChart.data[i]) / 4;
      }
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