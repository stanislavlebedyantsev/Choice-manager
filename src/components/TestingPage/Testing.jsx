import Header from "../Header/Header";
import s from "./TestingForm.module.css";
import QuestionComponent from "./QuestionComponent/QuestionComponent";
import Footer from "../Footer/Footer";

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
                dispatch={props.updateTestAnswers}
                questions={el.questions} categoryName={el.name}
                key={el.id}
              />);
            }) : <div/>


        }
        {
          props.TestingQuestions.categories.length !== 0 ?
            <button className={s.button} onClick={props.postAnswers}>Send testing data</button>
            : <div/>

        }
      </div>
      <Footer/>
    </div>);
};
export default Testing;