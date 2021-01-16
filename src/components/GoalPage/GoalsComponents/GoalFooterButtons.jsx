import s from '../../common/buttonsStyle/buttonsStyle.module.css'

const GoalTopButtons = ({isEdit,done,handleAddSubTask,handleComplete}) => {
  return (
    <div >
      {!done ? (isEdit ?
        <button name={'addSubtask'}
                onClick={handleAddSubTask}
                className={s.btn}>
          Add subtask
        </button> : null)
        : null}
      {
        !done ?
          <button className={s.btn}
                  name={'complete'}
                  onClick={handleComplete}>
            Complete task
          </button> : null
      }
    </div>
  )
}

export default GoalTopButtons;