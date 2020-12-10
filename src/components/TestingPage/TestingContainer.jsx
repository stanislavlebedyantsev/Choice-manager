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

class TestingApiContainer extends React.Component {
  componentDidMount() {
    this.props.getTestingQuestionsThunkCreator()
  }

  goToNextCategory(currentPage){
    this.props.currentPageInc()
    this.props.getTestingQuestionsThunkCreator(currentPage + 1)
  }
  goToPreviousCategory(currentPage){
    this.props.currentPageDec()
    this.props.getTestingQuestionsThunkCreator(currentPage - 1)
  }

  postAnswers() {
    this.props.postAnswersThunkCreator(this.props.TestingQuestions.answers)
  }

  updateAnswers(obj) {
    this.props.updateTestAnswers(obj);
  }

  render() {
    /*if(this.props.isAuth) return <Redirect to={'/login'}/>
    if(this.props.isAuth && this.props.isTested) return <Redirect to={'/goals'}/>*/
    if(localStorage.getItem('isAuth') === 'false')  return <Redirect to={'/login'}/>
    if(localStorage.getItem('isAuth') === 'true' && localStorage.getItem('isTested') === 'true') return <Redirect to={'/goals'}/>
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
          />
        }
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    TestingQuestions: state.testingPage,
    isFetching: state.testingPage.isFetching,
    currentPage: state.testingPage.currentPage,
    totalPages: state.testingPage.totalPages,
    isAuth: state.auth.isAuth,
    isTested: state.auth.isTested,
  };
};


export default connect(mapStateToProps, {
  updateTestAnswers,
  postAnswersThunkCreator,
  getTestingQuestionsThunkCreator,
  currentPageInc,
  currentPageDec,
  clearAnswers
})(TestingApiContainer);
