import s from "./TestingForm.module.css";
import QuestionComponent from "./QuestionComponent/QuestionComponent";
import ErrorComponent from "../common/errorAlert/errorComponent";
import React from "react";
import Footer from "../common/Footer/Footer";
import TestingHeader from "./TestingHeader/TestingHeader";
import TestingNav from "./TestingNav/TestingNav";

const Testing = ({currentPage,goToPreviousCategory,goToNextCategory,totalPages,TestingQuestions,updateAnswers,errorText,isError,postAnswers}) => {
  return (
    <div className={s.background}>
      {isError ?
        <ErrorComponent
          isError={isError}
          errorText={errorText}
        /> : null
      }
      <TestingHeader/>
      <div className={s.container}>
        {
          TestingQuestions.categories.length !== 0 ?
            TestingQuestions.categories.map((el) => {
              return (<QuestionComponent
                state={TestingQuestions}
                updateAnswers={updateAnswers}
                questions={el.questions} categoryName={el.name}
                key={el.id}
              />);
            }) : <div/>
        }
        <TestingNav currentPage={currentPage}
                    categories={TestingQuestions.categories}
                    totalPages={totalPages}
                    postAnswers={postAnswers}
                    goToNextCategory={goToNextCategory}
                    goToPreviousCategory={goToPreviousCategory}/>
      </div>
      <Footer/>
    </div>
  );
};
export default Testing;