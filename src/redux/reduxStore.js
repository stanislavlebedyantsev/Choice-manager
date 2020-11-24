import {combineReducers, createStore} from "redux";
import {loginReducer} from "./loginReducer";
import {registrationReducer} from "./registrationReduser";
import {testingReducer} from "./testingReducer";
import {profileReducer} from "./profileReducer";


let reducers = combineReducers({
  loginPage: loginReducer,
  registrationPage: registrationReducer,
  testingPage: testingReducer,
  profilePage: profileReducer,
});

/*
*/
export let store = createStore(reducers);