const SET_ERROR_TEXT = 'choice-manager/error/SET-ERROR-TEXT';
const HIDE_ERROR = 'choice-manager/error/HIDE-ERROR';

const initState = {
  isError: false,
  errorText: ''
};

export const errorReducer = (state = initState, action) => {
  let copyState;

  switch (action.type) {
    case SET_ERROR_TEXT: {
      copyState = {...state};
      copyState.isError = true;
      copyState.errorText = action.errorText;
      return copyState;
    }
    case HIDE_ERROR: {
      copyState = {...state};
      copyState.isError = false;
      return copyState;
    }
    default:
      return state;
  }

};

export const setErrorText = (errorText) => ({type: SET_ERROR_TEXT, errorText});
export const hideError = () => ({type: HIDE_ERROR});