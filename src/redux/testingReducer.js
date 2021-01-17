import {testingAPI} from "../api/testingApi";
import {toggleIsTested} from "./authReducer";
import {hideError, setErrorText} from "./errorReducer";

const initState = {
  categories: [],
  answers: [],
  isFetching: false,
  isTesting: false,
  currentPage: 1,
  totalPages: null,
  countOfQuests: 0,
  visitedPages: [1]
};


const GET_QUESTIONS = 'choice-manager/testing/GET-QUESTIONS';
const CURRENT_PAGE_INC = 'choice-manager/testing/CURRENT-PAGE-INC';
const CURRENT_PAGE_DEC = 'choice-manager/testing/CURRENT-PAGE-DEC';
const UPDATE_ANSWERS = 'choice-manager/testing/UPDATE-ANSWERS';
const CLEAR_ANSWERS = 'choice-manager/testing/CLEAR-ANSWERS';
const TOGGLE_IS_FETCHING = 'choice-manager/testing/TOGGLE-IS-FETCHING';

export const testingReducer = (state = initState, action) => {
  let copyState;
  switch (action.type) {
    case GET_QUESTIONS: {
      copyState = {...state};
      copyState = {
        ...copyState,
        categories: action.data.categories,
      };
      if (copyState.currentPage === 1 && !copyState.totalPages) {
        copyState.totalPages = action.data.categoryNumber;
      }
      if (!copyState.visitedPages.some(el => el === copyState.currentPage)
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
      if (!copyState.visitedPages.some(el => el === copyState.currentPage)) {
        copyState.visitedPages.push(copyState.currentPage);
      }
      return copyState;
    }
    case CURRENT_PAGE_INC: {
      copyState = {...state};
      if (copyState.currentPage + 1 <= copyState.totalPages) {
        copyState.currentPage++;
      }
      return copyState;
    }
    case CURRENT_PAGE_DEC: {
      copyState = {...state};
      if (copyState.currentPage - 1 > 0) {
        copyState.currentPage--;
      }
      return copyState;
    }
    case UPDATE_ANSWERS: {
      copyState = {...state};
      copyState = {
        ...copyState,
        answers: [...action.data]
      };
      return copyState;
    }
    case TOGGLE_IS_FETCHING: {
      return {...state, isFetching: action.data};
    }
    case CLEAR_ANSWERS: {
      return initState;
    }
    default:
      copyState = state;
      return copyState;
  }
};


export const getTestingQuestionsThunkCreator = (currentPage = 1) => async (dispatchEvent) => {
  dispatchEvent(toggleIsFetching(true));
  try {
    const response = await testingAPI.getTest(currentPage);
    dispatchEvent(toggleIsFetching(false));
    dispatchEvent(getTest(response));
  } catch (err) {
    dispatchEvent(setErrorText(err.message || err.response.data.error ));
    dispatchEvent(toggleIsFetching(false));
  }
};


export const postAnswersThunkCreator = (copyState) => async (dispatchEvent) => {
  dispatchEvent(toggleIsFetching(true));
  try {
    await testingAPI.postAnswers({answers: copyState});
    sessionStorage.setItem('isTested', 'true');
    dispatchEvent(toggleIsTested());
    dispatchEvent(hideError());
  } catch (err) {
    dispatchEvent(setErrorText(err.message || err.response.data.error));
  }
  dispatchEvent(toggleIsFetching(false));
};


export const getTest = (data) => ({type: GET_QUESTIONS, data});
export const clearAnswers = () => ({type: CLEAR_ANSWERS});
export const currentPageInc = () => ({type: CURRENT_PAGE_INC});
export const currentPageDec = () => ({type: CURRENT_PAGE_DEC});
export const updateTestAnswers = (data) => ({type: UPDATE_ANSWERS, data});
export const toggleIsFetching = (data) => ({type: TOGGLE_IS_FETCHING, data});