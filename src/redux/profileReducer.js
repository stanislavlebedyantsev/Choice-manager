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
      copyState = {...action.data};
      return copyState;
    }
    case 'UPDATE-PROFILE-DATA':{
      copyState = {...state}
      return copyState
    }
    default: {
      return state;
    }
  }
};

export const requestProfileData = (data) => ({type: 'GET-PROFILE-DATA', data});
export const updateProfileData = () => ({type: 'UPDATE-PROFILE-DATA'});