import s from "../Goals.module.css";

const GoalTopButtons = ({handleEdit,handleDelete,handleSave,done,isEdit}) => {
  return (
    <div className={s.buttons}>
      {
        !done ?
          (!isEdit ?
              <button className={s.editButton} name={'edit'} onClick={handleEdit}/>
              :
              <button className={s.saveButton} name={'save'} onClick={handleSave}/>
          ) : <div/>
      }


      <button className={s.deleteButton} name={'delete'} onClick={handleDelete}/>
    </div>
  )
}

export default GoalTopButtons;