import './App.css';
import React from 'react';
import {Route, BrowserRouter} from "react-router-dom";
import LoginContainer from "./components/Login/LoginContainer";
import Registration from "./components/Registration/RegistrationContainer";
import About from "./components/About/About";
import checkEmail from "./components/Registration/CheckEmail";
import StartPage from "./components/StartPage/StartPage";
import Profile from "./components/ProfilePage/Profile";
import TestingContainer from "./components/TestingPage/TestingContainer";


function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Route path={"/login"} render={() =>  <LoginContainer/>}/>
          <Route path={"/registration"} render={() => <Registration/>}/>
          <Route path={"/about"} render={() => <About/>}/>
          <Route path={"/checkEmail"} render={() => <checkEmail/>}/>
          <Route path={"/profile"} render={() => <Profile/>}/>
          <Route path={"/testing"} render={() => <TestingContainer/>}/>
          <Route exact path={"/"} render={() => <StartPage/>}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
