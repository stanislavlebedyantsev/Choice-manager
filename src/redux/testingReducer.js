import * as axios from 'axios';
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
        categories: action.data.categories
      };
      for (let i of copyState.categories) {
        countOfQuests += i.questions.length;
      }
      const userId = Number(localStorage.getItem('userId'))
      for (let i = 0; i < countOfQuests; i++) {
        copyState.answers[i] = {
          question: {
            id: i + 1
          },
          user: {
            id: userId
          },
          value: "2.5"
        };
      }
      copyState.categories.forEach(el =>{
        el.questions.forEach(el =>{
          if(el.type === "special") copyState.answers[el.id - 1].value = ''
        })
      })
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
        }, {
          headers:{
            h:1123
          }
        })
        .then(response => {
          console.log(response.data);
          copyState = {...initState};
          return copyState;
        }).then(() => {
        //change it to normal redirect
        /*window.location.href = '/profile';*/
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