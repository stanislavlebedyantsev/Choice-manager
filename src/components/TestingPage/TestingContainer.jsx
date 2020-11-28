import React from 'react';
import {connect} from "react-redux";
import {getTestingQuestions, postAnswers, toggleIsFetching, updateAnswers} from "../../redux/testingReducer";
import * as axios from "axios";
import Testing from "./Testing";
import preloader from "../../images/Preloader.svg";
import s from "./TestingForm.module.css";

class TestingApiContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true)
    axios
      .get('http://127.0.0.1:8080/test')
      .then(response => {
        this.props.getTest(response.data);
        this.props.toggleIsFetching(false)
      });
  }

  postAnswers() {
    this.props.toggleIsFetching(true)
    this.props.postAnswersData();
  }

  updateAnswers(obj) {
    this.props.updateTestAnswers(updateAnswers(obj));
  }

  render() {

    return (
      <>
        {this.props.isFetching ?
          (<div className={s.preloader}>
            <img src={preloader} />
          </div>):
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
    },
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetching(isFetching));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestingApiContainer);

