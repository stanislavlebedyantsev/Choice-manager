import React from 'react';
import {connect} from "react-redux";
import {
  clearAnswers,
  currentPageDec,
  currentPageInc,
  getTestingQuestionsThunkCreator, postAnswersThunkCreator,
  updateTestAnswers
} from "../../redux/testingReducer";
import Testing from "./Testing";
import Preloader from "../common/Preloader/Preloader";
import {withAuthAndTestingRedirectComponent} from "../../hoc/withAuthAndTestingRedirect";

class TestingApiContainer extends React.Component {
  componentDidMount() {
    this.props.clearAnswers();
    this.props.getTestingQuestionsThunkCreator();
  }

  goToNextCategory(currentPage) {
    this.props.currentPageInc();
    this.props.getTestingQuestionsThunkCreator(currentPage + 1);
  }

  goToPreviousCategory(currentPage) {
    this.props.currentPageDec();
    this.props.getTestingQuestionsThunkCreator(currentPage - 1);
  }

  postAnswers() {
    this.props.postAnswersThunkCreator(this.props.TestingQuestions.answers);
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
                   goToNextCategory={this.goToNextCategory.bind(this)}
                   goToPreviousCategory={this.goToPreviousCategory.bind(this)}
                   currentPage={this.props.currentPage}
                   totalPages={this.props.totalPages}
                   isError={this.props.isError}
                   errorText={this.props.errorText}
          />
        }
      </>
    );
  }
}

let AuthRedirectComponent = withAuthAndTestingRedirectComponent(TestingApiContainer);

const mapStateToProps = (state) => {
  return {
    TestingQuestions: state.testingPage,
    isFetching: state.testingPage.isFetching,
    currentPage: state.testingPage.currentPage,
    totalPages: state.testingPage.totalPages,
    isAuth: state.auth.isAuth,
    isTested: state.auth.isTested,
    isError: state.error.isError,
    errorText: state.error.errorText
  };
};


export default connect(mapStateToProps, {
  updateTestAnswers,
  postAnswersThunkCreator,
  getTestingQuestionsThunkCreator,
  currentPageInc,
  currentPageDec,
  clearAnswers
})(AuthRedirectComponent);
