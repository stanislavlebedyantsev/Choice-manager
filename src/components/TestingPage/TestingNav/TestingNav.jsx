import s from "../TestingForm.module.css";
import React from "react";


const TestingNav = React.memo((props) => {
  return (
    <div className={s.pageNavigation}>
      {
        props.currentPage !== 1 ?
          <button className={s.btn} onClick={() => props.goToPreviousCategory(props.currentPage)}>
            Go to previous category
          </button> : null
      }
      {
        (props.categories.length !== 0
          && props.currentPage === props.totalPages) ?
          <button className={s.btn} onClick={props.postAnswers}>Send answers</button>
          :
          (
            <button className={s.btn} onClick={() => props.goToNextCategory(props.currentPage)}>
              Go to next category</button>
          )
      }
    </div>
  )
})

export default TestingNav