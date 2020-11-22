import * as axios from 'axios';
import QuestionComponent from "../components/TestingPage/QuestionComponent/QuestionComponent";
import {Redirect} from 'react-router-dom';

const initState = {
  categories: [
    /*{
      id: 1,
      name: '',
      questions: [
        {
          id: 1,
          description: '',
          type: ''
        }
      ]
    }*/
  ],
  answers: [
    /*{
      question: {
        id: 1
      },
      user: {
        id: 0
      },
      value: ""
    }*/
  ]

};

export const testingReducer = (state = initState, action) => {
  let copyState;
  switch (action.type) {
    case 'TESTING-GET-QUESTIONS': {
      let countOfQuests = 0;
      copyState = {...state};
      copyState = {
        ...copyState,
        categories: action.data
      };
      for (let i of copyState.categories) {
        countOfQuests += i.questions.length;
      }
      for (let i = 0; i < countOfQuests; i++) {

        copyState.answers[i] = {
          question: {
            id: i + 1
          },
          user: {
            id: localStorage.getItem('userId')
          },
          value: ""
        };
        if (i > 1) copyState.answers[i].value = "2.5";
      }
      return copyState;
    }
    case 'UPDATE-ANSWERS': {
      copyState = {...state};
      copyState = {
        ...copyState,
        answers: [...action.data.data]
      };
      return copyState;
    }
    case 'POST-ANSWERS': {
      let taskList = {
        ...state
      };
      copyState = {
        answers: [...state.answers]
      };
      console.log(copyState);
      axios
        .post("http://127.0.0.1:8080/test", {
          ...copyState
        })
        .then(response => {
          console.log(response.data);
          copyState = {...initState};
          return copyState;
        }).then(() => {
        //change it to normal redirect
        window.location.href = '/profile';
      })
        .catch(() => {
          //temp redirect
          alert('Server connection error');
        });
      return taskList;
    }
    default:
      copyState = state;
      return copyState;
  }
};


export const getTestingQuestions = (data) => ({type: 'TESTING-GET-QUESTIONS', data});
export const updateAnswers = (data) => ({type: 'UPDATE-ANSWERS', data});
export const postAnswers = () => ({type: 'POST-ANSWERS'});