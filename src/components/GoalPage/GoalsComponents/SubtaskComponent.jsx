import s from "../Goals.module.css";

const SubtaskComponent = (props) => {
  const handleCheck = (event) => {
    props.subtaskIsDoneChange({
      subtaskId: props.subtaskState.id,
      taskId: props.taskId
    })
  };
  const handleChange = (event) => {
    let obj = {
      ...props.subtaskState
    };
    obj = {
      taskId: props.taskId,
      ...obj,
      [event.target.name]: event.target.value
    };
    props.editSubtask(obj);
  }
  return (
    <div className={s.subtaskContainer}>
      <label className={s.checkbox}>
        <input type="checkbox" checked={props.subtaskState.done ? 'checked' : ''}
               onChange={!props.isTaskDone ? handleCheck : null}/>
        {
          props.isEdit ?
            <input className={s.editInput} name={"name"} value={props.subtaskState.name}
                   placeholder={'Type your subtask'}
                   onChange={handleChange}/> :
            props.subtaskState.name
        }
      </label>
    </div>
  );
};
export default SubtaskComponent;