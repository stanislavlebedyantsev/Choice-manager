const initState = {
  isError: false,
  errorText: ''
}

export const errorReducer = (state = initState, action) => {
  let copyState;

  switch (action.type) {
    case 'SET-ERROR-TEXT':{
      copyState = {...state}
      copyState.isError = true
      copyState.errorText = action.errorText
      return copyState
    }
    case 'TOGGLE-ERROR':{
      copyState = {...state}
      copyState.isError = true
      return copyState
    }
    case 'HIDE-ERROR':{
      copyState = {...state}
      copyState.isError = false
      return copyState
    }
    default:
      return state;
  }

};

export const setErrorText = (errorText) => ({type: 'SET-ERROR-TEXT', errorText});
export const toggleIsError = () => ({type: 'TOGGLE-ERROR'});
export const hideError = () => ({type: 'HIDE-ERROR'});