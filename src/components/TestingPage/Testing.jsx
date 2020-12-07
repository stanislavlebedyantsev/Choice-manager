import Header from "../common/Header/Header";
import s from "./TestingForm.module.css";
import QuestionComponent from "./QuestionComponent/QuestionComponent";
import Footer from "../common/Footer/Footer";
import like from '../../images/like.svg';
import dislike from '../../images/dislike.svg';
import timer from '../../images/timer-testing-header.svg';
import radarChart from '../../images/radarChart-testing-description.svg';
import checkMark from "../../images/checkMark-black.svg";

const Testing = (props) => {
  return (
    <div>
      <Header/>
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
      <div className={s.container}>
        {
          props.TestingQuestions.categories.length !== 0 ?
            props.TestingQuestions.categories.map((el) => {
              return (<QuestionComponent
                state={props.TestingQuestions}
                updateAnswers={props.updateAnswers}
                questions={el.questions} categoryName={el.name}
                key={el.id}
              />);
            }) : <div/>
        }
        <div className={s.pageNavigation}>
          {
            props.currentPage !== 1 ?
            <button className={s.btn} onClick={() => props.goToPreviousCategory(props.currentPage)}>
              Go to previous category
            </button> : null
          }
          {
            (props.TestingQuestions.categories.length !== 0
              && props.currentPage === props.totalPages) ?
              <button className={s.btn} onClick={props.postAnswers}>Send answers</button>
              :
              (
                <button className={s.btn} onClick={() => props.goToNextCategory(props.currentPage)}>
                  Go to next category</button>
              )
          }
        </div>
      </div>
      <Footer/>
    </div>
  );
};
export default Testing;