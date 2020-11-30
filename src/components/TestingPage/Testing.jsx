import Header from "../common/Header/Header";
import s from "./TestingForm.module.css";
import QuestionComponent from "./QuestionComponent/QuestionComponent";
import Footer from "../common/Footer/Footer";

const Testing = (props) => {
  return (
    <div>
      <Header/>
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
        {
          props.TestingQuestions.categories.length !== 0 ?
            <button className={s.button} onClick={props.postAnswers}>Send testing data</button>
            : null

        }
      </div>
      <Footer/>
    </div>);
};
export default Testing;