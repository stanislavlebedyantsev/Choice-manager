import './App.css';
import React from 'react';
import {Redirect, BrowserRouter, Route, Switch} from "react-router-dom";
import LoginContainer from "./components/Login/LoginContainer";
import Registration from "./components/Registration/RegistrationContainer";
import StartPage from "./components/StartPage/StartPage";
import GoalContainer from "./components/GoalPage/GoalContainer";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import {store} from "./redux/reduxStore";
import {positions, Provider as AlertProvider, transitions} from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import {lazyComponentHOC} from "./hoc/lazyComponentHOC";

const EmailConfirmApiComponent = React.lazy(() => import("./components/EmailConfirm/EmailConfirmContainer"));
const TestingContainer = React.lazy(() => import("./components/TestingPage/TestingContainer"));
const ProfileContainer = React.lazy(() => import("./components/ProfilePage/ProfileContainer"));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader/>;
    }
    return (
      <div className="App">
        <div>
          <Switch>
            <Route path={"/login"} render={() => <LoginContainer/>}/>
            <Route path={"/registration"} render={() => <Registration/>}/>
            <Route path={"/checkEmail"} render={() => <checkEmail/>}/>
            <Route path={"/profile"} render={lazyComponentHOC(ProfileContainer)}/>
            <Route path={"/testing"} render={lazyComponentHOC(TestingContainer)}/>
            <Route path={"/goals"} render={() => <GoalContainer/>}/>
            <Route path={"/activate/:activationCode"} render={lazyComponentHOC(EmailConfirmApiComponent)}/>
            <Route exact path={"/"} render={() => <StartPage/>}/>
            <Redirect from={'*'} to={'/'}/>
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  initialized: state.app.initialized
});
const AppContainer = connect(mapStateToProps, {initializeApp})(App);

const ChoiceManagerApp = () => {
  const options = {
    // you can also just use 'bottom center'
    position: positions.BOTTOM_CENTER,
    timeout: 5000,
    offset: '30px',
    // you can also just use 'scale'
    transition: transitions.SCALE
  };
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...options}>
          <AppContainer/>
        </AlertProvider>
      </Provider>
    </BrowserRouter>
  );
};
export default ChoiceManagerApp;