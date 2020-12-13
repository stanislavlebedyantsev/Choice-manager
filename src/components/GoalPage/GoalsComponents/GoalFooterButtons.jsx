import s from '../../common/buttonsStyle/buttonsStyle.module.css'

const GoalTopButtons = (props) => {
  return (
    <div >
      {!props.done ? (props.isEdit ?
        <button name={'addSubtask'} onClick={props.handleClick} className={s.btn}>Add subtask</button> : null)
        : null}
      {
        !props.done ?
          <button className={s.btn} name={'complete'} onClick={props.handleClick}>Complete task</button> : null
      }
    </div>
  )
}

export default GoalTopButtons;