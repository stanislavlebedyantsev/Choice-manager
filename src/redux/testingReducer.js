import {testingAPI} from "../api/testingApi";

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
      let oldCountOfQuests;
      copyState = {...state};
      copyState = {
        ...copyState,
        categories: action.data.categories,
      };
      oldCountOfQuests = copyState.countOfQuests;
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
      console.log(copyState);
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
      copyState = {
        ...state,
        answers: []
      }
      return copyState;
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


export const postAnswersThunkCreator = (copyState, currentPage, totalPages) => {
  return (dispatchEvent) => {
    console.log(copyState);
    testingAPI.postAnswers({answers: copyState})
      .then(() => {
        //change it to normal redirect
        dispatchEvent(toggleIsFetching(false));
        window.location.href = '/profile';
      })
      .catch((err) => {
        alert(err.response.data.error);
        //temp redirect
        dispatchEvent(toggleIsFetching(false));
        //alert(err);
      });
  };
};


export const getTest = (data) => ({type: 'GET-QUESTIONS', data});
export const clearAnswers = () => ({type: 'CLEAR-ANSWERS'});
export const currentPageInc = () => ({type: 'CURRENT-PAGE-INC'});
export const currentPageDec = () => ({type: 'CURRENT-PAGE-DEC'});
export const updateTestAnswers = (data) => ({type: 'UPDATE-ANSWERS', data});
export const toggleIsFetching = (data) => ({type: 'TOGGLE-IS-FETCHING', data});