import React from "react";
import s from '../TestingForm.module.css';
import AnswersRadioComponent from "../AnswersRadioComponent/AnswersRadioComponent";

const QuestionComponent = (props) => {
  const handleChange = (id, value) => {
    let copyState = props.state.answers;
    let obj = [
      ...copyState
    ];
    obj[id - 1] = {
      question: {
        id: Number(id)
      },
      value: value
    };
    props.updateAnswers(obj)
    console.log(props.state.answers);
  };
  const questArr = props.questions.map(el => {
    return (
      <div className={s.questContainer}>
        <div className={s.questDiscr}>{el.description}</div>
        <div className={s.answerBlock}>
          {
            el.type === 'special' ?
              <textarea key={el.id} id={el.id} name={"answers"} placeholder={"Type your answer here"} onChange={handleChange}/>
              : <AnswersRadioComponent key={el.id} id={el.id} updateAnswer={handleChange}/>
                /*<input name={"answers"}
                       type="range"
                       id={el.id}
                       min={0} max={5} step={0.5}
                       value={props.state.answers[Number(el.id) - 1].value}
                       onChange={handleChange}/>
                <label htmlFor="answer">{props.state.answers[Number(el.id) - 1].value}</label>*/
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