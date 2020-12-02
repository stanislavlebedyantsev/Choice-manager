import s from "../TestingForm.module.css";
import React from "react";

const AnswersRadioComponent = (props) => {
  const handleClick = (event) => {
    props.updateAnswer(props.id, event.target.id)
  }
  return (
    <div className={s.options}>
      <div className={`${s.option} ${s.disagree} ${s.min}`} id={0} defaultValue={0} onClick={handleClick}>
        <span aria-hidden={"true"}/>
      </div>
      <div className={`${s.option} ${s.disagree} ${s.med}`} id={1} defaultValue={1} onClick={handleClick}>
        <span aria-hidden={"true"}/>
      </div>
      <div className={`${s.option} ${s.neutral} ${s.max}`} id={2} defaultValue={2} onClick={handleClick}>
        <span aria-hidden={"true"}/>
      </div>
      <div className={`${s.option} ${s.agree} ${s.med}`} id={3} defaultValue={3} onClick={handleClick}>
        <span aria-hidden={"true"}/>
      </div>
      <div className={`${s.option} ${s.agree} ${s.max}`} id={4} defaultValue={4} onClick={handleClick}>
        <span aria-hidden={"true"}/>
      </div>
    </div>
  )
}
export default AnswersRadioComponent;