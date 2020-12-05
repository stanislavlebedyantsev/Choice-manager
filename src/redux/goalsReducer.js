import * as axios from 'axios';

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
      console.log(copyState);
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
      /////if andrey fix id in db use variant in comment
      /*copyState.goals[action.data - 1].isEdit = true;*/
      //////unless if andrey d fix id in db use this
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
        name: '',
        explanation: '',
        isDone: false,
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
      /////if andrey fix id in db use variant in comment
      /*copyState.goals[action.data.taskId].tasks[action.data.subtaskId].isDone =
        !copyState.goals[action.data.taskId].tasks[action.data.subtaskId].isDone;*/
      //////unless if andrey d fix id in db use this
      for (let el of copyState.goals){
        if(el.id === action.data.taskId){
          for(let subEl of el.tasks){
            if(subEl.id === action.data.subtaskId){
              subEl.isDone = !subEl.isDone
            }
          }
        }
      }
      return copyState;
    }
    case 'PUT-EDITED-TASK': {
      copyState = {...state};
      axios
        .put("http://127.0.0.1:8080/goals", {
          ...action.data
        }, {
          headers: {
            Authorization: `${localStorage.getItem('tokenType')} ${localStorage.getItem('accessToken')}`
          }
        })
        .then(responce => {
          /////if andrey fix id in db use variant in comment
          /*copyState.goals[action.data - 1].isEdit = false;*/
          //////unless if andrey d fix id in db use this
          console.log(copyState);
        });
      return copyState;
    }
    case 'POST-EDITED-TASK': {
      copyState = {...state};
      delete
      axios
        .post("http://127.0.0.1:8080/goals/create", {
          ...action.data
        }, {
          headers: {
            Authorization: `${localStorage.getItem('tokenType')} ${localStorage.getItem('accessToken')}`
          }
        })
        .then(responce => {
          /////if andrey fix id in db use variant in comment
          /*copyState.goals[action.data - 1].isEdit = false;*/
          //////unless if andrey d fix id in db use this
          console.log(responce.data);
          for(let el of copyState.goals){
            if(!el.hasOwnProperty('id')){
              el.id = responce.data
            }
          }
          console.log(copyState);
        })
        .catch(r =>{
          console.log(r);
        });
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
export const postEditedTask = (data) => ({type: 'POST-EDITED-TASK', data});
export const subtaskIsDoneChange = (data) => ({type: 'TOGGLE-SUBTASK', data});
export const addSubtask = (data) => ({type: 'ADD-SUBTASK', data});
export const deleteTask = (data) => ({type: 'DELETE-TASK', data});
export const addTask = () => ({type: 'ADD-TASK'});
export const getTask = (data) => ({type: 'GET-TASKS', data});