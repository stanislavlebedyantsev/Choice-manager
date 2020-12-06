import {goalsAPI} from "../api/goalsApi";

const initState = {
  goals: [
    /*{
      id: 0,
      name: '12',
      explanations: '1',
      isDone: false,
      tasks: [
        {
          id: 0,
          name: '',
          isDone: false
        }
      ],
      isEdit: false
    },
    {
      id: 1,
      name: '125345',
      explanations: '134534534',
      isDone: false,
      tasks: [
        {
          id: 0,
          name: '',
          isDone: false
        }
      ],
      isEdit: false
    }*/
  ],
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
          copyState.goals[i] = {
            ...action.data
          };
        }
      }
      return copyState;
    }
    case 'EDIT-SUBTASK': {
      debugger
      copyState = {
        ...state
      };
      for (let i in copyState.goals) {
        if (copyState.goals[i].id === action.data.taskId) {
          copyState.goals[i].tasks[action.data.id - 1] = {
            ...copyState.goals[i].tasks[action.data.id - 1],
            name: action.data.name
          };
        }
      }
      return copyState;
    }
    case 'TOGGLE-EDIT': {
      copyState = {
        ...state
      };
      copyState.goals[action.data - 1].isEdit = !copyState.goals[action.data - 1].isEdit;
      return copyState;
    }
    case 'ADD-SUBTASK': {
      copyState = {
        ...state
      };
      for (let el of copyState.goals) {
        if (el.id === action.data) {
          el.tasks.push({
            id: copyState.goals[action.data - 1].tasks.length + 1,
            name: '',
            done: false
          });
        }
      }
      return copyState;
    }
    case 'DELETE-TASK': {
      copyState = {
        ...state
      };
      let id;
      copyState.goals.forEach((el, i) => {
        if (el.id === action.data)
          id = i;
      });

      copyState.goals.splice(id, 1);
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
      console.log(copyState);
      return copyState;
    }
    case 'TOGGLE-SUBTASK': {
      copyState = {
        ...state
      }
      copyState.goals[action.data.taskId - 1].tasks[action.data.subtaskId - 1].done =
        !copyState.goals[action.data.taskId - 1].tasks[action.data.subtaskId - 1].done;
      return copyState;
    }
    case 'POST-EDITED-TASK': {
      copyState = {...state};
      for (let el of copyState.goals) {
        if (el.hasOwnProperty('isAdded')) {
          delete el.isAdded;
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
export const postEditedTask = (data) => ({type: 'POST-EDITED-TASK', data});
export const subtaskIsDoneChange = (data) => ({type: 'TOGGLE-SUBTASK', data});
export const addSubtask = (data) => ({type: 'ADD-SUBTASK', data});
export const deleteTask = (data) => ({type: 'DELETE-TASK', data});
export const addTask = () => ({type: 'ADD-TASK'});
export const getTask = (data) => ({type: 'GET-TASKS', data});

export const getTaskThunkCreator = () => (dispatchEvent) =>{
  goalsAPI.getGoals().then(response => {
    dispatchEvent(getTask(response));
  })
}
export const postTaskThunkCreator = (obj) => (dispatchEvent) =>{
  goalsAPI.postGoals(obj)
    .then(response => {
      dispatchEvent(postEditedTask(obj));
    })
    .catch(r => {
      console.log(r);
    });
}
export const deleteTaskThunkCreator = (obj) => (dispatchEvent) =>{
  goalsAPI.deleteGoals(obj)
    .then(response => {
      dispatchEvent(deleteTask(obj));
    });
}
export const putTaskThunkCreator = (obj) => (dispatchEvent) =>{
  goalsAPI.putGoals(obj);
}
