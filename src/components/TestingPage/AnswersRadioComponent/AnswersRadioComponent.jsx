import s from "../TestingForm.module.css";
import React from "react";

const AnswersRadioComponent = (props) => {
  const REF_MIN_DIS = React.createRef();
  const REF_MED_DIS = React.createRef();
  const REF_MED_AGR = React.createRef();
  const REF_MAX_AGR = React.createRef();
  const REF_NEUTRAL = React.createRef();
  const handleClick = (event) => {
    let refObj = {
      maxArg: REF_MAX_AGR.current,
      medArg: REF_MED_AGR.current,
      neutral: REF_NEUTRAL.current,
      medDis: REF_MED_DIS.current,
      minDis: REF_MIN_DIS.current
    };
    for (let i in refObj){
      refObj[i].ariaChecked = false
      refObj[i].className = refObj[i].className.replace(s.active, '')
    }
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
    event.target.ariaChecked = true;
    event.target.className += s.active
    props.updateAnswers(obj);
  };
  return (
    <div className={s.options}>
      <div className={`${s.option} ${s.disagree} ${s.min} `} ref={REF_MIN_DIS}
           aria-checked={false} id={0} onClick={handleClick}/>
      <div className={`${s.option} ${s.disagree} ${s.med} `} ref={REF_MED_DIS} aria-checked={false} id={1}
           onClick={handleClick}/>
      <div className={`${s.option} ${s.neutral} ${s.max} `} ref={REF_NEUTRAL} aria-checked={false} id={2}
           onClick={handleClick}/>
      <div className={`${s.option} ${s.agree} ${s.med} `} ref={REF_MED_AGR} aria-checked={false} id={3}
           onClick={handleClick}/>
      <div className={`${s.option} ${s.agree} ${s.max} `} ref={REF_MAX_AGR} aria-checked={false} id={4}
           onClick={handleClick}/>
    </div>
  );
};
export default AnswersRadioComponent;