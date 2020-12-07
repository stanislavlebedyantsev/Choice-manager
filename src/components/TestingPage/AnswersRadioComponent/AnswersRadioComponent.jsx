import s from "../TestingForm.module.css";
import React from "react";
import like from '../../../images/like.svg';
import dislike from '../../../images/dislike.svg';

const AnswersRadioComponent = (props) => {
  const handleClick = (event) => {
    let copyState = props.answersState;
    let obj = [
      ...copyState
    ];
    obj[props.id - 1] = {
      question: {
        id: Number(props.id)
      },
      value: event.target.id
    };
    props.updateAnswers(obj);
  };
  return (
    <div className={s.options}>
      <div className={s.marker}>
        <img src={dislike} alt=""/>
      </div>
      <div className={props.answersState[props.id - 1].value === '0'
        ? `${s.option} ${s.disagree} ${s.min} ${s.active}` : `${s.option} ${s.disagree} ${s.min}`}
           aria-checked={props.answersState[props.id - 1].value === '0'}
           id={0} onClick={handleClick}/>
      <div className={props.answersState[props.id - 1].value === '1' ?
        `${s.option} ${s.disagree} ${s.med} ${s.active}` : `${s.option} ${s.disagree} ${s.med}`}
           aria-checked={props.answersState[props.id - 1].value === '1'} id={1}
           onClick={handleClick}/>
      <div className={props.answersState[props.id - 1].value === '2'
        ? `${s.option} ${s.neutral} ${s.max} ${s.active}` : `${s.option} ${s.neutral} ${s.max}`}
           aria-checked={props.answersState[props.id - 1].value === '2'} id={2}
           onClick={handleClick}/>
      <div className={props.answersState[props.id - 1].value === '3' ?
        `${s.option} ${s.agree} ${s.med} ${s.active}` : `${s.option} ${s.agree} ${s.med} `}
           aria-checked={props.answersState[props.id - 1].value === '3'} id={3}
           onClick={handleClick}/>
      <div className={props.answersState[props.id - 1].value === '4' ?
        `${s.option} ${s.agree} ${s.max} ${s.active}` : `${s.option} ${s.agree} ${s.max} `}
           aria-checked={props.answersState[props.id - 1].value === '4'} id={4}
           onClick={handleClick}/>
      <div className={s.marker}>
        <img src={like} alt=""/>
      </div>
    </div>
  );
};
export default AnswersRadioComponent;