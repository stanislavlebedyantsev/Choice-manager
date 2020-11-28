const initState = {
  goals: [
    {
      id: 0,
      name: '12',
      explanations: '1',
      isDone: false,
      tasks: [
        {
          name: '',
          isDone: false
        }
      ]
    }
  ],
  isFetching: false,
  isEdit: false
};

export const goalsReducer = (state = initState, action) => {
  let copyState;
  switch (action.type) {
    case 'EDIT-TASK':{
      copyState = {
        ...state
      }
      for(let i in copyState.goals){
        if(copyState.goals[i].id === action.data.id){
          copyState.goals[i] = {
            ...action.data
          }
        }
      }
      return copyState
    }
    case 'TOGGLE-EDIT':{
      copyState = {
        ...state,
        isEdit: !state.isEdit
      }
      return copyState
    }
    default:
      return state;
  }
};

export const updateTask = (data) => ({type: 'EDIT-TASK', data});
export const toggleEdit = () => ({type: 'TOGGLE-EDIT'});