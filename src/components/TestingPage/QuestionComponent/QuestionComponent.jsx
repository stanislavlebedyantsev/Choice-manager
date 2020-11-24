import React from "react";
import s from '../TestingForm.module.css';
import {updateAnswers} from "../../../redux/testingReducer";

const QuestionComponent = (props) => {
  const handleChange = (event) => {
    let copyState = props.state.answers;
    let obj = [
      ...copyState
    ];
    obj[Number(event.target.id) - 1] = {
      question: {
        id: Number(event.target.id)
      },
      user: {
        id: 1
      },
      value: event.target.value
    };
    props.dispatch(updateAnswers(obj));
    console.log(props.state.answers);
  };
  const questArr = props.questions.map(el => {
    return (
      <div>
        <div className={s.questDiscr}>{el.description}</div>
        <div className={s.answerBlock}>
          {
            el.type === 'special' ?
              <textarea id={el.id} name={"answers"} placeholder={"Type your answer here"} onChange={handleChange}/> :
              <div>
                <input name={"answers"}
                       type="range"
                       id={el.id}
                       min={0} max={5} step={0.5}
                       value={props.state.answers[Number(el.id) - 1].value}
                       onChange={handleChange}/>
                <label htmlFor="answer">{props.state.answers[Number(el.id) - 1].value}</label>
              </div>

          }
        </div>
      </div>
    );
  });
  return (
    <div>
      <h1>{props.categoryName}</h1>
      <div>
        {questArr}
      </div>
    </div>
  );
};
export default QuestionComponent;