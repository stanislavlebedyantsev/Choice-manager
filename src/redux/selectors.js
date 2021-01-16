//example of using reselect lib
/*import {createSelector} from "reselect";

const getDataForSuperSelector = (state) => {
  return state.someData;
}
export const SuperSelector = createSelector(getDataForSuperSelector, anotherGetData,
  (data, anotherData) => {
    return data.filter(u => true)
  }
)*/

//goal selectors
export const getGoalsData = (state) => {
  return state.goalsPage;
};
export const getGoalIsFetching = (state) => {
  return state.goalsPage.isFetching;
};

//profile selectors
export const getProfileData = (state) => {
  return state.profilePage;
};
export const getProfileIsFetching = (state) => {
  return state.profilePage.isFetching;
};

//registration selectors
export const getIsRegistered = (state) => {
  return state.registrationPage;
};

//error alert selectors
export const getIsError = (state) => {
  return state.error.isError;
};
export const getErrorText = (state) => {
  return state.error.errorText;
};

//testing page selectors
export const getTestingQuestions = (state) => {
  return state.testingPage;
};
export const getTestingIsFetching = (state) => {
  return state.testingPage.isFetching;
};
export const getTestingCurrentPage = (state) => {
  return state.testingPage.currentPage;
};
export const getTestingTotalPages = (state) => {
  return state.testingPage.totalPages;
};
