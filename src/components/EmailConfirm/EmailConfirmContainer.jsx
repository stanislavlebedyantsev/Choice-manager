import React from 'react';
import EmailConfirm from "./EmailConfirm";
import {withRouter} from "react-router-dom";
import * as axios from "axios";

class EmailConfirmApiComponent extends React.Component {
  componentDidMount() {
    console.log(this.props);
    axios
      .post("http://127.0.0.1:8080/activation", {
        ...this.props.activationCode
      })
      .then(r => {
        console.log(r.data);
      })
  }

  render() {
    return (
      <EmailConfirm/>
    );
  }
}

export default withRouter(EmailConfirmApiComponent)