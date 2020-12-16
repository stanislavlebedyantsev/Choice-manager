import {applyMiddleware, combineReducers, createStore} from "redux";
import {loginReducer} from "./loginReducer";
import {registrationReducer} from "./registrationReducer";
import {testingReducer} from "./testingReducer";
import {profileReducer} from "./profileReducer";
import {goalsReducer} from "./goalsReducer";
import {authReducer} from "./authReducer";
import thunkMiddleware from "redux-thunk";
import {errorReducer} from "./errorReducer";


let reducers = combineReducers({
  loginPage: loginReducer,
  registrationPage: registrationReducer,
  testingPage: testingReducer,
  profilePage: profileReducer,
  goalsPage: goalsReducer,
  auth: authReducer,
  error: errorReducer
});

export let store = createStore(reducers, applyMiddleware(thunkMiddleware));