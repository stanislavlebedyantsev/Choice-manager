import React from "react";
import s from '../TestingForm.module.css';
import AnswersRadioComponent from "../AnswersRadioComponent/AnswersRadioComponent";


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
      value: event.target.value
    };
    props.updateAnswers(obj)
  };
  const questArr = props.questions.map(el => {
    return (
      <div className={s.questContainer}>
        <div className={s.questDiscr}><p>{el.description}</p></div>
        <div className={s.answerBlock}>
          {
            el.type === 'special' ?
              <textarea key={el.id} id={el.id} className={s.textAnswers} rows={'5'}
                        name={"answers"} placeholder={"Type your answer here"}
                        value={props.state.answers[el.id-1].value}
                        onChange={handleChange}/>
              : <AnswersRadioComponent updateAnswers={props.updateAnswers}
                                       answersState={props.state.answers}
                                       key={el.id} id={el.id} />
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