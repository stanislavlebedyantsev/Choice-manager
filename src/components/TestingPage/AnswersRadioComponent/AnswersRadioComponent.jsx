import s from "../TestingForm.module.css";
import React from "react";
import like from '../../../images/like.svg';
import dislike from '../../../images/dislike.svg';
import cn from 'classnames'

const AnswersRadioComponent = ({answersState,updateAnswers,id}) => {
  const handleClick = (event) => {
    let obj = [
      ...(answersState)
    ];
    obj[id - 1] = {
      question: {
        id: Number(id)
      },
      value: event.target.id
    };
    updateAnswers(obj);
  };
  return (
    <div className={s.options}>
      <div className={s.marker}>
        <img src={dislike} alt=""/>
      </div>
      <div className={cn({[s.active]: answersState[id - 1].value === '0'}, s.option, s.disagree, s.min)}
           aria-checked={answersState[id - 1].value === '0'}
           id={0} onClick={handleClick}/>
      <div className={cn({[s.active]: answersState[id - 1].value === '1'}, s.option, s.disagree, s.med)}
           aria-checked={answersState[id - 1].value === '1'} id={1}
           onClick={handleClick}/>
      <div className={cn({[s.active]: answersState[id - 1].value === '2'}, s.option, s.neutral, s.max)}
           aria-checked={answersState[id - 1].value === '2'} id={2}
           onClick={handleClick}/>
      <div className={cn({[s.active]: answersState[id - 1].value === '3'}, s.option, s.agree, s.med)}
           aria-checked={answersState[id - 1].value === '3'} id={3}
           onClick={handleClick}/>
      <div className={cn({[s.active]: answersState[id - 1].value === '4'}, s.option, s.agree, s.max)}
           aria-checked={answersState[id - 1].value === '4'} id={4}
           onClick={handleClick}/>
      <div className={s.marker}>
        <img src={like} alt=""/>
      </div>
    </div>
  );
};
export default AnswersRadioComponent;