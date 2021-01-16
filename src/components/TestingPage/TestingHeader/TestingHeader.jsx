import s from "../TestingForm.module.css";
import timer from "../../../images/timer-testing-header.svg";
import checkMark from "../../../images/checkMark-black.svg";
import dislike from "../../../images/dislike.svg";
import like from "../../../images/like.svg";
import radarChart from "../../../images/radarChart-testing-description.svg";
import React from "react";


const TestingHeader = React.memo(() => {
  return (
    <div className={s.pageDescription}>
      <h1>Test yourself</h1>
      <div className={`${s.descriptionContainer}`}>
        <div className={`${s.descriptionTime} ${s.tip}`}>
          <p><img src={timer} alt=""/></p>
          <p>The test will take less than 10 minutes</p>
        </div>
        <div className={`${s.descriptionMarks} ${s.tip}`}>
          <p><img src={checkMark} className={s.checkMarkBlack} alt=""/></p>
          <p>Answers rotated from <img src={dislike} className={s.descrMarker} alt=""/> (or 0 value)
            to <img src={like} className={s.descrMarker} alt=""/> (or 4 value)</p>
        </div>
        <div className={`${s.descriptionRadar} ${s.tip}`}>
          <p><img src={radarChart} alt=""/></p>
          <p>After the test you can see your result on radar chart at profile page</p>
        </div>
      </div>
    </div>
  )
})

export default TestingHeader