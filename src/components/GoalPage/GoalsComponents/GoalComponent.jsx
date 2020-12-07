import s from "../Goals.module.css";
import SubtaskComponent from "./SubtaskComponent";
import GoalTopButtons from "./GoalTopButtons";
import GoalFooterButtons from "./GoalFooterButtons";
import ProgressBar from "./ProgressBar";

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
    } else if (event.target.name === 'save' && props.state.isEdit && props.state.hasOwnProperty('isAdded')) {
      props.postEditedTask(props.state);
      props.toogleEditBtn(Number(props.state.id));
    } else if (event.target.name === 'addSubtask') {
      props.addSubtask(props.state.id);
    } else if (event.target.name === 'delete') {
      props.deleteTask(props.state.id);
    } else if (event.target.name === 'complete') {
      const obj = {...props.state, done: true};
      obj.tasks.forEach(el => {
        el.done = true;
      });
      props.putEditedTask(obj, true);
    }
  };

  const handleCheck = (obj) => {
    props.subtaskIsDoneChange(obj);
    props.putEditedTask(props.state);
  };
  return (
    <div className={s.goalContainer}>
      <div>
        <GoalTopButtons handleClick={handleClick}
                        done={props.state.done}
                        isEdit={props.state.isEdit}/>
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
        <ProgressBar progress={props.state.progress}/>
        {props.state.tasks.map(el => (
          <SubtaskComponent subtaskState={el}
                            taskId={props.state.id}
                            subtaskIsDoneChange={handleCheck}
                            isEdit={props.state.isEdit}
                            editSubtask={props.editSubtask}
                            isTaskDone={props.state.done}
          />
        ))}
        <GoalFooterButtons handleClick={handleClick}
                           done={props.state.done}
                           isEdit={props.state.isEdit}/>

      </div>
    </div>
  );

};
export default GoalComponent;

