const INITIALIZED_SUCCESS = 'choice-manager/app/INITIALIZED-SUCCESS';

const initState = {
  initialized: false
};

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      };
    default:
      return state;
  }
};

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatchEvent) => {
  //some initialize thunk
  dispatchEvent(initializedSuccess());
};

export default appReducer;