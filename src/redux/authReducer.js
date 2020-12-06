let initState = {
  accessToken: null,
  tokenType: null,
  isAuth: false
};

export const authReducer = (state = initState, action) => {
  //let copyState;
  switch (action.type) {
    case 'SET-USER-DATA': {
      return {
        ...state,
        ...action.data,
        isAuth: true
      };
    }
    default:
      return state;
  }
};

export const setUserData = (data) => ({type: 'SET-USER-DATA', data});