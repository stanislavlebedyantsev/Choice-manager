import s from "../Profile.module.css";

const bottomRightInput = (props) => {
  return (
    <div className={s.bottomRightSide}>
      <input className={s.bottomRightInput} name={'name'} value={props.state.user.name}/>
      <input className={s.bottomRightInput} name={'surname'}/>
      <input className={s.bottomRightInput}/>
      <input className={s.bottomRightInput}/>
      <input className={s.bottomRightInput} type={'password'}/>
      <input className={s.bottomRightInput} type={'password'}/>
    </div>
  );
};
export default bottomRightInput;