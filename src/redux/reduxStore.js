import {combineReducers, createStore} from "redux";
import {loginReducer} from "./loginReducer";
import {registrationReducer} from "./registrationReduser";
import {testingReducer} from "./testingReducer";


let reducers = combineReducers({
  loginPage: loginReducer,
  registrationPage: registrationReducer,
  testingPage: testingReducer,
});

/*
*/
export let store = createStore(reducers);