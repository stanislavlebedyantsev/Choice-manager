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
    props.EditGoal(obj);
    console.log(props.state);
  };
  const handleClick = (event) => {
    console.log(event.target.name);
    if (event.target.name === 'edit') {
      props.toogleEditBtn();
    }
  };
  return (
    <div className={s.goalContainer}>
      <div>
        <div className={s.buttons}>
          <button className={s.editButton} name={'edit'} onClick={handleClick}/>
          <button className={s.deleteButton}/>
        </div>
        <div className={s.goalNameH6}>
          {
            props.isEdit ?
              (
                <div>
                  <p><input className={s.editInput} name={"name"} value={props.state.name}
                            onChange={handleChange}/>
                  </p>
                  <p><input className={s.editInput}
                                                             name={"explanations"} value={props.state.explanations}
                                                             onChange={handleChange}/>
                  </p>
                </div>
              )
              :
              (
                <div>
                  <p className={s.taskName}>{props.state.name}</p>
                  <p className={`{/*${s.descriptionP}*/} ${s.discrPaddings}`}>{props.state.explanations}</p>
                </div>
              )
          }
        </div>
        <progress className={s.progressBar} value="57" max="100"/>
        <SubtaskComponent/>
        <button>Add subtask</button>
        <button>Complete task</button>
      </div>
    </div>
  );

};
export default GoalComponent;

