import {combineReducers, createStore} from "redux";
import {loginReducer} from "./loginReducer";
import {registrationReducer} from "./registrationReducer";
import {testingReducer} from "./testingReducer";
import {profileReducer} from "./profileReducer";
import {goalsReducer} from "./goalsReducer";


let reducers = combineReducers({
  loginPage: loginReducer,
  registrationPage: registrationReducer,
  testingPage: testingReducer,
  profilePage: profileReducer,
  goalsPage: goalsReducer
});

/*
*/
export let store = createStore(reducers);