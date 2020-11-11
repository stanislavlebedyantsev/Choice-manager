import s from "../Goals.module.css";

const GoalTopButtons = (props) => {
  return (
    <div className={s.buttons}>
      {
        !props.done ?
          (!props.isEdit ?
              <button className={s.editButton} name={'edit'} onClick={props.handleClick}/>
              :
              <button className={s.saveButton} name={'save'} onClick={props.handleClick}/>
          ) : <div/>
      }


      <button className={s.deleteButton} name={'delete'} onClick={props.handleClick}/>
    </div>
  )
}

export default GoalTopButtons;