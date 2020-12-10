let initState = {
  accessToken: null,
  tokenType: null,
  isAuth: false,
  isTested: false
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
    case 'TOGGLE-IS-TESTED': {
      return {...state, isTested: true};
    }
    case 'LOGOUT': {
      return initState;
    }
    default:
      return state;
  }
};

export const setUserData = (data) => ({type: 'SET-USER-DATA', data});
export const toggleIsTested = (data) => ({type: 'TOGGLE-IS-TESTED', data});
export const logout = () => ({type: 'LOGOUT'});