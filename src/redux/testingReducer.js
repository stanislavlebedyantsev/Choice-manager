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
      }
      for (let i = 0; i < countOfQuests; i++) {
        copyState.answers[i] = {
          question: {
            id: i + 1
          },
          value: ""
        };
      }
      console.log(copyState);
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

    default:
      copyState = state;
      return copyState;
  }
};


export const getTestingQuestionsThunkCreator = () => {
  return (dispatchEvent) => {
    dispatchEvent(toggleIsFetching(true));
    testingAPI.getTest()
      .then(data => {
        dispatchEvent(toggleIsFetching(false));
        dispatchEvent(getTest(data));
      })
  }
}


export const postAnswersThunkCreator = (copyState) => {
  return (dispatchEvent) => {
    console.log(copyState);
    testingAPI.postAnswers({answers: copyState})
      .then(() => {
        //change it to normal redirect
        dispatchEvent(toggleIsFetching(false))
        window.location.href = '/profile';
      })
      .catch((err) => {
        //temp redirect
        dispatchEvent(toggleIsFetching(false))
        //alert(err);
      });
  }
}



export const getTest = (data) => ({type: 'TESTING-GET-QUESTIONS', data});
export const updateTestAnswers = (data) => ({type: 'UPDATE-ANSWERS', data});
export const toggleIsFetching = (data) => ({type: 'TOGGLE-IS-FETCHING', data});