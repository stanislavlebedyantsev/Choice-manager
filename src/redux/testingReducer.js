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
  ],
  isFetching: false,
  isTesting: false
};

export const testingReducer = (state = initState, action) => {
  let copyState;
  switch (action.type) {
    case 'TESTING-GET-QUESTIONS': {
      let countOfQuests = 0;
      copyState = {...state};
      copyState = {
        ...copyState,
        categories: action.data.categories,
        isTesting: action.data.isTesting
      };
      for (let i of copyState.categories) {
        countOfQuests += i.questions.length;
        i.questions.forEach(el => {
          el = {
            ...el,
            isAnswered: false
          }
        })
      }
      copyState.categories[0].questions[0].isAnswered = true;
      for (let i = 0; i < countOfQuests; i++) {
        copyState.answers[i] = {
          question: {
            id: i + 1
          },
          value: ""
        };
      }
      return copyState;
    }

    case 'UPDATE-ANSWERS': {
      copyState = {...state};
      copyState = {
        ...copyState,
        answers: [...action.data]
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
          headers: {
            Authorization: `${localStorage.getItem('tokenType')} ${localStorage.getItem('accessToken')}`
          }
        })
        .then(response => {
          copyState = {...initState};
        })
        .then(() => {
          //change it to normal redirect
          window.location.href = '/profile';
        })
        .catch(() => {
          //temp redirect
          taskList.isFetching = false;
          alert('Server connection error');
        });
      return initState;
    }
    case 'TOGGLE-IS-FETCHING': {
      return {...state, isFetching: action.data};
    }

    default:
      copyState = state;
      return copyState;
  }
};


export const getTest = (data) => ({type: 'TESTING-GET-QUESTIONS', data});
export const updateTestAnswers = (data) => ({type: 'UPDATE-ANSWERS', data});
export const postAnswersData = () => ({type: 'POST-ANSWERS'});
export const toggleIsFetching = (data) => ({type: 'TOGGLE-IS-FETCHING', data});