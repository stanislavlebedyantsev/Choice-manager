import React from 'react';
import EmailConfirm from "./EmailConfirm";
import {withRouter} from "react-router-dom";
import * as axios from "axios";

class EmailConfirmApiComponent extends React.Component {
  componentDidMount() {
    axios
      .post(`http://127.0.0.1:8080/activate/${this.props.match.params.activationCode}`,
        {
          activateCode: this.props.match.params.activationCode
        }
      )
  }

  render() {
    return (
      <EmailConfirm/>
    );
  }
}

export default withRouter(EmailConfirmApiComponent)