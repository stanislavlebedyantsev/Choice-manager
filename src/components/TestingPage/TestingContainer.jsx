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
import {Redirect} from "react-router-dom";
import {
  getErrorText,
  getIsError,
  getTestingCurrentPage,
  getTestingIsFetching, getTestingQuestions,
  getTestingTotalPages
} from "../../redux/selectors";

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
    if (sessionStorage.getItem('isAuth') !== 'true') {
      return <Redirect to={'/login'}/>;
    } else if (sessionStorage.getItem('isAuth') === 'true'
      && sessionStorage.getItem('isTested') === 'true')
      return <Redirect to={'/goals'}/>;
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

const mapStateToProps = (state) => {
  return {
    TestingQuestions: getTestingQuestions(state),
    isFetching: getTestingIsFetching(state),
    currentPage: getTestingCurrentPage(state),
    totalPages: getTestingTotalPages(state),
    isError: getIsError(state),
    errorText: getErrorText(state)
  };
};
export default connect(mapStateToProps, {
    updateTestAnswers,
    postAnswersThunkCreator,
    getTestingQuestionsThunkCreator,
    currentPageInc,
    currentPageDec,
    clearAnswers
  }
)(TestingApiContainer);