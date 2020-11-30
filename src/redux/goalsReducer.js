const initState = {
  goals: [
    {
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
    }
  ],
  isFetching: false
};

export const goalsReducer = (state = initState, action) => {
  let copyState;
  switch (action.type) {
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
      copyState = {
        ...state
      };
      for (let i in copyState.goals) {
        if (copyState.goals[i].id === action.data.taskId) {
          copyState.goals[i].tasks[action.data.id] = {
            ...copyState.goals[i].tasks[action.data.id],
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
      copyState.goals[action.data].isEdit = true;
      return copyState;
    }
    case 'ADD-SUBTASK': {
      copyState = {
        ...state
      };
      copyState.goals[action.data].tasks.push({
        id: copyState.goals[action.data].tasks.length,
        name: '',
        isDone: false
      });
      return copyState;
    }
    case 'DELETE-TASK': {
      copyState = {
        ...state
      };
      let id;
      copyState.goals.forEach((el, i) => {
        if(el.id === action.data)
          id = i;
      })
      copyState.goals.splice(id, 1);
      return copyState;
    }
    case 'ADD-TASK': {
      copyState = {
        ...state
      };
      copyState.goals.push({
        id: copyState.goals.length,
        name: '',
        explanations: '',
        isDone: false,
        tasks: [],
        isEdit: true
      });
      return copyState;
    }
    case 'TOGGLE-SUBTASK': {
      copyState = {
        ...state
      };
      copyState.goals[action.data.taskId].tasks[action.data.subtaskId].isDone =
        !copyState.goals[action.data.taskId].tasks[action.data.subtaskId].isDone;
      return copyState;
    }
    case 'PUT-EDITED-TASK': {
      copyState = {...state};
      console.log(action.data);
      alert('click');
      copyState.goals[action.data.id].isEdit = false;
      return copyState;
    }
    default:
      return state;
  }
};

export const editGoals = (data) => ({type: 'EDIT-TASK', data});
export const editSubtask = (data) => ({type: 'EDIT-SUBTASK', data});
export const toggleEdit = (data) => ({type: 'TOGGLE-EDIT', data});
export const putEditedTask = (data) => ({type: 'PUT-EDITED-TASK', data});
export const subtaskIsDoneChange = (data) => ({type: 'TOGGLE-SUBTASK', data});
export const addSubtask = (data) => ({type: 'ADD-SUBTASK', data});
export const deleteTask = (data) => ({type: 'DELETE-TASK', data});
export const addTask = () => ({type: 'ADD-TASK'});