import {testingAPI} from "../api/testingApi";
import {toggleIsTested} from "./authReducer";
import {hideError, setErrorText, toggleIsError} from "./errorReducer";

const initState = {
  categories: [],
  answers: [],
  isFetching: false,
  isTesting: false,
  currentPage: 1,
  totalPages: null,
  countOfQuests: 0,
  visitedPages:[1]
};

export const testingReducer = (state = initState, action) => {
  let copyState;
  switch (action.type) {
    case 'GET-QUESTIONS': {
      copyState = {...state};
      copyState = {
        ...copyState,
        categories: action.data.categories,
      };
      if (copyState.currentPage === 1) {
        copyState.totalPages = action.data.categoryNumber;
      }

      if(!copyState.visitedPages.some(el => el === copyState.currentPage)
        || !copyState.answers.length) {
        copyState.countOfQuests = copyState.categories[0].questions.length;
        for (let i = 0; i < copyState.countOfQuests; i++) {
          copyState.answers.push({
            question: {
              id: copyState.categories[0].questions[i].id
            },
            value: ""
          });
        }
      }
      if(!copyState.visitedPages.some(el => el === copyState.currentPage)){
        copyState.visitedPages.push(copyState.currentPage)
      }
      return copyState;
    }
    case 'CURRENT-PAGE-INC': {
      copyState = {...state};
      if (copyState.currentPage + 1 <= copyState.totalPages){
        copyState.currentPage++;
      }
      return copyState;
    }
    case 'CURRENT-PAGE-DEC': {
      copyState = {...state};
      if (copyState.currentPage - 1 > 0){
        copyState.currentPage--;
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

    case 'TOGGLE-IS-FETCHING': {
      return {...state, isFetching: action.data};
    }
    case 'CLEAR-ANSWERS': {
      return {
        categories: [],
        answers: [],
        isFetching: false,
        isTesting: false,
        currentPage: 1,
        totalPages: null,
        countOfQuests: 0,
        visitedPages:[1]
      };
    }

    default:
      copyState = state;
      return copyState;
  }
};


export const getTestingQuestionsThunkCreator = (currentPage = 1) => {
  return (dispatchEvent) => {
    dispatchEvent(toggleIsFetching(true));
    testingAPI.getTest(currentPage)
      .then(data => {
        dispatchEvent(toggleIsFetching(false));
        dispatchEvent(getTest(data));
      });
  };
};


export const postAnswersThunkCreator = (copyState) => {
  return (dispatchEvent) => {
    testingAPI.postAnswers({answers: copyState})
      .then(() => {
        localStorage.setItem('isTested', 'true')
        dispatchEvent(toggleIsFetching(false));
        dispatchEvent(toggleIsTested())
        dispatchEvent(hideError())
      })
      .catch((err) => {
        dispatchEvent(toggleIsError())
        dispatchEvent(setErrorText(err.response.data.error))
        dispatchEvent(toggleIsFetching(false));
      });
  };
};


export const getTest = (data) => ({type: 'GET-QUESTIONS', data});
export const clearAnswers = () => ({type: 'CLEAR-ANSWERS'});
export const currentPageInc = () => ({type: 'CURRENT-PAGE-INC'});
export const currentPageDec = () => ({type: 'CURRENT-PAGE-DEC'});
export const updateTestAnswers = (data) => ({type: 'UPDATE-ANSWERS', data});
export const toggleIsFetching = (data) => ({type: 'TOGGLE-IS-FETCHING', data});