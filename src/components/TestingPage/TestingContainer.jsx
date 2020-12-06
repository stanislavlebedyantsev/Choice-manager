import React from 'react';
import {connect} from "react-redux";
import {
  getTestingQuestionsThunkCreator, postAnswersThunkCreator,
  updateTestAnswers
} from "../../redux/testingReducer";
import Testing from "./Testing";
import Preloader from "../common/Preloader/Preloader";

class TestingApiContainer extends React.Component {
  componentDidMount() {
    this.props.getTestingQuestionsThunkCreator()
  }

  postAnswers() {
    this.props.postAnswersThunkCreator(this.props.TestingQuestions.answers)
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
  updateTestAnswers,
  postAnswersThunkCreator,
  getTestingQuestionsThunkCreator
})(TestingApiContainer);

