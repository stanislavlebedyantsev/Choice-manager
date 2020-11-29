import './App.css';
import React from 'react';
import {Route, BrowserRouter} from "react-router-dom";
import LoginContainer from "./components/Login/LoginContainer";
import Registration from "./components/Registration/RegistrationContainer";
import About from "./components/About/About";
import checkEmail from "./components/Registration/CheckEmail";
import StartPage from "./components/StartPage/StartPage";
import TestingContainer from "./components/TestingPage/TestingContainer";
import GoalContainer from "./components/GoalPage/GoalContainer";
import ProfileContainer from "./components/ProfilePage/ProfileContainer";

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Route path={"/login"} render={() =>  <LoginContainer/>}/>
          <Route path={"/registration"} render={() => <Registration/>}/>
          <Route path={"/checkEmail"} render={() => <checkEmail/>}/>
          <Route path={"/profile"} render={() => <ProfileContainer/>}/>
          <Route path={"/testing"} render={() => <TestingContainer/>}/>
          <Route path={"/goals"} render={() => <GoalContainer/>}/>
          <Route exact path={"/"} render={() => <StartPage/>}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
