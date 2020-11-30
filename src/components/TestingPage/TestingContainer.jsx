import React from 'react';
import {connect} from "react-redux";
import {
  getTest,
  postAnswersData,
  toggleIsFetching,
  updateTestAnswers
} from "../../redux/testingReducer";
import * as axios from "axios";
import Testing from "./Testing";
import Preloader from "../common/Preloader/Preloader";

class TestingApiContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get('http://127.0.0.1:8080/test')
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.getTest(response.data);

      })
      .catch();
  }

  postAnswers() {
    this.props.toggleIsFetching(true);
    this.props.postAnswersData();
  }

  updateAnswers(obj) {
    this.props.updateTestAnswers(obj);
  }

  render() {

    return (
      <>
        {this.props.isFetching ?
          (<Preloader/>) :
          <Testing TestingQuestions={this.props.TestingQuestions}
                   postAnswers={this.postAnswers.bind(this)}
                   updateAnswers={this.updateAnswers.bind(this)}
          />
        }
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    TestingQuestions: state.testingPage,
    isFetching: state.testingPage.isFetching
  };
};


export default connect(mapStateToProps, {
  getTest,
  updateTestAnswers,
  postAnswersData,
  toggleIsFetching
})(TestingApiContainer);

