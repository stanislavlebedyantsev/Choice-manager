import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, {login, loginUpdateText, registration, registrationUpdateText, subscribe} from "./redux/state";



const AppRender = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App appState={state}
           loginFun={login}
           loginUpdateText={loginUpdateText}
           registrationUpdateText={registrationUpdateText}
           registrationFun={registration}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
AppRender()
subscribe(AppRender)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
