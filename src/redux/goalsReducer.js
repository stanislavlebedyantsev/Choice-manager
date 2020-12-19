import {goalsAPI} from "../api/goalsApi";

const initState = {
  goals: [],
  isFetching: false
};
const GET_TASK = 'choice-manager/goal/GET-TASKS';
const ADD_SUBTASK = 'choice-manager/goal/ADD-SUBTASK';
const TOGGLE_SUBTASK = 'choice-manager/goal/TOGGLE-SUBTASK';
const TOGGLE_IS_FETCHING = 'choice-manager/goal/TOGGLE-IS-FETCHING';

export const goalsReducer = (state = initState, action) => {
  let copyState;
  switch (action.type) {
    case GET_TASK: {
      copyState = {
        ...state,
        ...action.goals
      };
      return copyState;
    }
    case ADD_SUBTASK: {
      copyState = {
        ...state
      };
      for (let el of copyState.goals) {
        if (el.id === action.data) {
          el.tasks.push({
            id: el.tasks.length + 1,
            name: '',
            done: false
          });
        }
      }
      return copyState;
    }
    case TOGGLE_SUBTASK: {
      copyState = {
        ...state
      };
      for (let el of copyState.goals) {
        if (el.id === action.data.taskId) {
          for (let taskEl of el.tasks) {
            if (taskEl.id === action.data.subtaskId) {
              taskEl.done = !taskEl.done;
            }
          }
        }
      }

      return copyState;
    }
    case TOGGLE_IS_FETCHING: {
      return {...state, isFetching: action.data};
    }
    default:
      return state;
  }
};

export const toggleIsFetching = (data) => ({type: TOGGLE_IS_FETCHING, data});
export const subtaskIsDoneChange = (data) => ({type: TOGGLE_SUBTASK, data});
export const addSubtask = (data) => ({type: ADD_SUBTASK, data});
export const getTask = (goals) => ({type: GET_TASK, goals});

export const getTaskThunkCreator = () => async (dispatchEvent) => {
  dispatchEvent(toggleIsFetching(true));
  const response = await goalsAPI.getGoals();
  dispatchEvent(getTask(response));
  dispatchEvent(toggleIsFetching(false));
};
export const postTaskThunkCreator = (obj) => async (dispatchEvent) => {
  dispatchEvent(toggleIsFetching(true));
  await goalsAPI.postGoals(obj);
  dispatchEvent(getTaskThunkCreator());
  dispatchEvent(toggleIsFetching(false));

};
export const deleteTaskThunkCreator = (obj) => async (dispatchEvent) => {
  dispatchEvent(toggleIsFetching(true));

  await goalsAPI.deleteGoals(obj);
  dispatchEvent(getTaskThunkCreator());
  dispatchEvent(toggleIsFetching(false));

};
export const putTaskThunkCreator = (obj) => async (dispatchEvent) => {
  dispatchEvent(toggleIsFetching(true));
  await goalsAPI.putGoals(obj);
  dispatchEvent(getTaskThunkCreator());
  dispatchEvent(toggleIsFetching(false));
};
