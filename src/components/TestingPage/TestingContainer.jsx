import React from 'react';
import {connect} from "react-redux";
import {getTestingQuestions, postAnswers, updateAnswers} from "../../redux/testingReducer";
import * as axios from "axios";
import Testing from "./Testing";

class TestingApiContainer extends React.Component {
  componentDidMount() {
    axios
      .get('http://127.0.0.1:8080/test')
      .then(response => {
        this.props.getTest(response.data);
      });
  }

  postAnswers() {
    this.props.postAnswersData();
  }

  render() {
    return (
      <Testing TestingQuestions={this.props.TestingQuestions} postAnswers={this.postAnswers}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    TestingQuestions: state.testingPage
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTest: (obj) => {
      dispatch(getTestingQuestions(obj));
    },
    updateTestAnswers: (obj) => {
      dispatch(updateAnswers(obj));
    },
    postAnswersData: () => {
      dispatch(postAnswers());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestingApiContainer);

