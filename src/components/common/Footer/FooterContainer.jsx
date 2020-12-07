import React from 'react'
import {setUserData} from "../../../redux/authReducer";
import {connect} from "react-redux";
import Footer from "./Footer";

class FooterContainer extends React.Component{
  /*componentDidMount() {
    this.props.isAuth()
  }*/
  render() {
    return <Footer/>
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth

})

export default connect(mapStateToProps, {setUserData})(FooterContainer)