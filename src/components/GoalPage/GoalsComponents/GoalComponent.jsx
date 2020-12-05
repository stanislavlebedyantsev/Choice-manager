import s from "../Goals.module.css";
import SubtaskComponent from "./SubtaskComponent";

const GoalComponent = (props) => {
  const handleChange = (event) => {
    let obj = {
      ...props.state
    };
    obj = {
      ...obj,
      [event.target.name]: event.target.value
    };
    props.editGoal(obj);
  };
  const handleClick = (event) => {
    if (event.target.name === 'edit' && !props.state.isEdit) {
      props.toogleEditBtn(Number(props.state.id));
    } else if (event.target.name === 'save' && props.state.isEdit && !props.state.hasOwnProperty('isAdded')) {
      props.putEditedTask(props.state);
      props.toogleEditBtn(Number(props.state.id));
    }
    else if (event.target.name === 'save' && props.state.isEdit && props.state.hasOwnProperty('isAdded')) {
      props.postEditedTask(props.state);
      props.toogleEditBtn(Number(props.state.id));
    } else if (event.target.name === 'addSubtask') {
      props.addSubtask(props.state.id)
    }
    else if (event.target.name === 'delete') {
      props.deleteTask(props.state.id)
    }
  };
  return (
    <div className={s.goalContainer}>
      <div>
        <div className={s.buttons}>
          {
            !props.state.isEdit ?
              <button className={s.editButton} name={'edit'} onClick={handleClick}/>
              :
              <button className={s.saveButton} name={'save'} onClick={handleClick}/>
          }
          <button className={s.deleteButton} name={'delete'} onClick={handleClick}/>
        </div>
        <div className={s.goalNameH6}>
          {
            props.state.isEdit ?
              (
                <div>
                  <p><input className={s.editInput} name={"name"} value={props.state.name}
                            placeholder={'Type title of your goal'}
                            onChange={handleChange}/>
                  </p>
                  <p><input className={s.editInput}
                            name={"explanation"} value={props.state.explanation}
                            placeholder={'Type your goal'}
                            onChange={handleChange}/>
                  </p>
                </div>
              )
              :
              (
                <div>
                  <p className={s.taskName}>{props.state.name}</p>
                  <p className={`{/*${s.descriptionP}*/} ${s.discrPaddings}`}>{props.state.explanation}</p>
                </div>
              )
          }
        </div>
        <progress className={s.progressBar} value="57" max="100"/>
        {props.state.tasks.map(el => (
          <SubtaskComponent subtaskState={el}
                            taskId={props.state.id}
                            subtaskIsDoneChange={props.subtaskIsDoneChange}
                            isEdit={props.state.isEdit}
                            editSubtask={props.editSubtask}
          />
        ))}
        {props.state.isEdit ?
          <button name={'addSubtask'} onClick={handleClick} className={s.btn} >Add subtask</button>
          : null}
        <button className={s.btn}>Complete task</button>
      </div>
    </div>
  );

};
export default GoalComponent;

