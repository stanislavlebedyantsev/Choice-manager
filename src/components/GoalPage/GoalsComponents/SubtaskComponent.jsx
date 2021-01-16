import s from "../Goals.module.css";

const SubtaskComponent = ({subtaskState, taskId, isTaskDone, isEdit, editSubtask, subtaskIsDoneChange}) => {
  const handleCheck = () => {
    subtaskIsDoneChange({
      subtaskId: subtaskState.id,
      taskId: taskId
    });
  };
  const handleChange = (event) => {
    let obj = {
      ...subtaskState
    };
    obj = {
      taskId: taskId,
      ...obj,
      [event.target.name]: event.target.value
    };
    editSubtask(obj);
  };
  return (
    <div className={s.subtaskContainer}>
      <label className={s.checkbox}>
        <input type="checkbox" checked={subtaskState.done ? 'checked' : ''}
               onChange={!isTaskDone ? handleCheck : null}/>
        {
          isEdit ?
            <input className={s.editInput} name={"name"} value={subtaskState.name}
                   placeholder={'Type your subtask'}
                   onChange={handleChange}/> :
            subtaskState.name
        }
      </label>
    </div>
  );
};
export default SubtaskComponent;