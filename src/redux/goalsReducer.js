import {goalsAPI} from "../api/goalsApi";

const initState = {
  goals: [],
  isFetching: false
};

export const goalsReducer = (state = initState, action) => {
  let copyState;
  switch (action.type) {
    case 'GET-TASKS': {
      for (let el of action.data.goals) {
        el.isEdit = false;
      }
      copyState = {
        ...state,
        ...action.data
      };
      return copyState;
    }
    case 'EDIT-TASK': {
      copyState = {
        ...state
      };
      for (let i in copyState.goals) {
        if (copyState.goals[i].id === action.data.id) {
          copyState.goals.splice(i, 1, action.data);
        }
      }
      return copyState;
    }
    case 'EDIT-SUBTASK': {
      copyState = {
        ...state
      };
      for (let i in copyState.goals) {
        if (copyState.goals[i].id === action.data.taskId) {
          for (let taskId in copyState.goals[i].tasks) {
            if (copyState.goals[i].tasks[taskId].id === action.data.id)
              copyState.goals[i].tasks.splice(taskId, 1, action.data);
          }
        }
      }
      return copyState;
    }
    case 'TOGGLE-EDIT': {
      copyState = {
        ...state
      };
      for (let el of copyState.goals) {
        if (el.id === action.data) {
          el.isEdit = !el.isEdit;
        }
      }
      return copyState;
    }
    case 'ADD-SUBTASK': {
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
    case 'ADD-TASK': {
      copyState = {
        ...state
      };
      copyState.goals.push({
        id: copyState.goals.length + 1,
        name: '',
        explanation: '',
        done: false,
        tasks: [],
        isEdit: true,
        isAdded: false
      });
      return copyState;
    }
    case 'TOGGLE-SUBTASK': {
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
    default:
      return state;
  }
};

export const editGoals = (data) => ({type: 'EDIT-TASK', data});
export const editSubtask = (data) => ({type: 'EDIT-SUBTASK', data});
export const toggleEdit = (data) => ({type: 'TOGGLE-EDIT', data});
export const subtaskIsDoneChange = (data) => ({type: 'TOGGLE-SUBTASK', data});
export const addSubtask = (data) => ({type: 'ADD-SUBTASK', data});
export const addTask = () => ({type: 'ADD-TASK'});
export const getTask = (data) => ({type: 'GET-TASKS', data});

export const getTaskThunkCreator = () => (dispatchEvent) => {
  goalsAPI.getGoals().then(response => {
    dispatchEvent(getTask(response));
  });
};
export const postTaskThunkCreator = (obj) => (dispatchEvent) => {
  delete obj.id;
  for (let el of obj.tasks) {
    delete el.id;
  }
  goalsAPI.postGoals(obj)
    .then(() => {
      dispatchEvent(getTaskThunkCreator());
    })
    .catch(r => {
      console.log(r);
    });
};
export const deleteTaskThunkCreator = (obj) => (dispatchEvent) => {
  goalsAPI.deleteGoals(obj)
    .then(() => {
      dispatchEvent(getTaskThunkCreator());
    });
};
export const putTaskThunkCreator = (obj) => (dispatchEvent) => {
  goalsAPI.putGoals(obj).then(() => {
    dispatchEvent(getTaskThunkCreator());
  });
};
