import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import * as axios from "axios";
import QuestionComponent from "./QuestionComponent/QuestionComponent";
import s from './TestingForm.module.css';

class TestingForm extends React.Component {
  componentDidMount() {

    this.props.getTest();
  }

  postAnswers() {
    this.props.postAnswersData();
  }

  render() {
    return (
      <div>
        <Header/>
        <div className={s.container}>
          {
            this.props.TestingQuestions.categories.length !== 0 ?
              this.props.TestingQuestions.categories.map((el) => {
                return (<QuestionComponent
                  state={this.props.TestingQuestions}
                  dispatch={this.props.updateTestAnswers}
                  questions={el.questions} categoryName={el.name}
                  key={el.id}
                />);
              }) : <div/>


          }
          {
            this.props.TestingQuestions.categories.length !== 0 ?
              <button className={s.button} onClick={this.props.postAnswersData}>Send testing data</button>
              : <div/>

          }
        </div>
        <Footer/>
      </div>
    );
  }
}

export default TestingForm;