import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import * as axios from "axios";
import QuestionComponent from "./QuestionComponent/QuestionComponent";
import s from './TestingForm.module.css';

class TestingForm extends React.Component {
  getTests() {
    axios
      .get('http://127.0.0.1:8080/test')
      .then(responce => {
        this.props.getTest(responce.data);
      });
  }
  postAnswers(){
    this.props.postAnswersData();
  }
  render() {
    if (this.props.TestingQuestions.categories.length === 1) {
      this.getTests();
    }
    return (
      <div>
        <Header/>
        <div className={s.container}>
          {
            this.props.TestingQuestions.categories.map((el) => {
              return (<QuestionComponent
                state={this.props.TestingQuestions}
                dispatch={this.props.updateTestAnswers}
                questions={el.questions} categoryName={el.name}
                key={el.id}
              />);
            })
          }
          <button className={s.button} onClick={this.props.postAnswersData}>Send testing data</button>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default TestingForm;