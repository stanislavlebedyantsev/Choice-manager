import {errorReducer, hideError, setErrorText} from "./errorReducer";

it('added error text', () => {
  let action = setErrorText('Error');
  let state = {
    isError: false,
    errorText: ''
  }
  let newState = errorReducer(state, action);
  expect(newState.errorText).toBe('Error');
});
it('isError true', () => {
  let action = setErrorText('Error');
  let state = {
    isError: false,
    errorText: ''
  }
  let newState = errorReducer(state, action);
  expect(newState.isError).toBe(true);
});
it('isError false', () => {
  let action = hideError();
  let state = {
    isError: false,
    errorText: ''
  }
  let newState = errorReducer(state, action);
  expect(newState.isError).toBe(false);
});