import s from "../Goals.module.css";

const SubtaskComponent = (props) => {
  return (
    <div className={s.subtaskContainer}>
      <label className={s.checkbox}>
        <input type="checkbox" />
        Task 1
      </label>
    </div>
  )
};
export default SubtaskComponent