import './App.css';
import React from 'react';
import {Route, BrowserRouter} from "react-router-dom";
import LoginComponent from "./components/Login/LoginComponent";
import Registration from "./components/Registration/Registration";
import About from "./components/About/About";
import checkEmail from "./components/Registration/CheckEmail";
import StartPage from "./components/StartPage/StartPage";
import Profile from "./components/ProfilePage/Profile";


function App(props) {
  return (
    <BrowserRouter>
      <div className="App">

        <div>
          <Route path={"/login"} render={() => <LoginComponent loginFun={props.loginFun}
                                                               loginStateText={props.appState.loginPage}
                                                               loginUpdateText={props.loginUpdateText}/>}/>
          <Route path={"/registration"} render={() => <Registration
            registrationStateText={props.appState.registrationPage}
            registrationUpdateText={props.registrationUpdateText}
            registrationFun={props.registrationFun}/>}/>
          <Route path={"/about"} render={() => <About devTeamData={props.appState.mainPage}/>}/>
          <Route path={"/checkEmail"} render={() => <checkEmail/>}/>
          <Route path={"/profile"} render={() => <Profile/>}/>
          <Route exact path={"/"} render={() => <StartPage/>}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
