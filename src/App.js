import './App.css';
import React from 'react';
import Header from "./components/Header/Header";
import {Route, BrowserRouter} from "react-router-dom";
import LoginComponent from "./components/Login/LoginComponent";
import Registration from "./components/Registration/Registration";
import Mainpage from "./components/MainPage/Mainpage";



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <div>
          <Route path={"/login"} component={LoginComponent}/>
          <Route path={"/registration"} component={Registration}/>
          <Route path={"/mainpage"} component={Mainpage}/>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
