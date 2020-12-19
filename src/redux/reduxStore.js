import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {registrationReducer} from "./registrationReducer";
import {testingReducer} from "./testingReducer";
import {profileReducer} from "./profileReducer";
import {goalsReducer} from "./goalsReducer";
import {authReducer} from "./authReducer";
import thunkMiddleware from "redux-thunk";
import {errorReducer} from "./errorReducer";
import {reducer as formReducer} from "redux-form";
import appReducer from "./appReducer";


let reducers = combineReducers({
  registrationPage: registrationReducer,
  testingPage: testingReducer,
  profilePage: profileReducer,
  goalsPage: goalsReducer,
  auth: authReducer,
  error: errorReducer,
  form: formReducer,
  app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
  applyMiddleware(thunkMiddleware)
));

