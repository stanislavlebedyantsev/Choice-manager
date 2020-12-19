import {getTask, goalsReducer} from "./goalsReducer";


it('length of goal should be incremented', () => {
  let goals = {
    goals: [{
      id: 58, name: "1343423423",
      explanation: "123", progress: 50,
      tasks: [
        {id: 206, name: "sdfgsdf", done: true},
        {id: 207, name: "asdasd", done: true},
        {id: 208, name: "", done: false}
      ]
    }]
  };
  let action = getTask(goals);
  let state = {
    goals: [],
    isFetching: false
  }
  let newState = goalsReducer(state, action);
  expect(newState.goals.length).toBe(1);
});
it('goal contain new data', () => {
  let goals = {
    goals: [{
      id: 58, name: "1343423423",
      explanation: "123", progress: 50,
      tasks: [
        {id: 206, name: "sdfgsdf", done: true},
        {id: 207, name: "asdasd", done: true},
        {id: 208, name: "", done: false}
      ]
    }]
  };
  let action = getTask(goals);
  let state = {
    goals: [],
    isFetching: false
  }
  let newState = goalsReducer(state, action);
  expect(newState.goals).toBe(goals.goals);
});