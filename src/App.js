import './App.css';
import React from 'react';
import {Route, BrowserRouter} from "react-router-dom";
import LoginContainer from "./components/Login/LoginContainer";
import Registration from "./components/Registration/RegistrationContainer";
import StartPage from "./components/StartPage/StartPage";
import TestingContainer from "./components/TestingPage/TestingContainer";
import GoalContainer from "./components/GoalPage/GoalContainer";
import ProfileContainer from "./components/ProfilePage/ProfileContainer";
import EmailConfirmApiComponent from "./components/EmailConfirm/EmailConfirmContainer";

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Route path={"/login"} render={() => <LoginContainer/>}/>
          <Route path={"/registration"} render={() => <Registration/>}/>
          <Route path={"/checkEmail"} render={() => <checkEmail/>}/>
          <Route path={"/profile"} render={() => <ProfileContainer/>}/>
          <Route path={"/testing"} render={() => <TestingContainer/>}/>
          <Route path={"/goals"} render={() => <GoalContainer/>}/>
          <Route path={"/activate/:activationCode"} render={() => <EmailConfirmApiComponent/>}/>
          <Route exact path={"/"} render={() => <StartPage/>}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
