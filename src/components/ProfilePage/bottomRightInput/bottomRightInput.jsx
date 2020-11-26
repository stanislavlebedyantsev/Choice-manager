import s from "../Profile.module.css";

const bottomRightInput = (props) => {
  const handleChange = (event) => {
    let obj = {
      ...props.state
    };
    obj = {
      ...obj,
      [event.target.name]: event.target.value
    };
    props.profileUpdateState(obj);
  };
  return (
    <div className={s.bottomRightSide}>
      <input className={s.bottomRightInput} name={'name'}
             value={props.state.name}
             onChange={handleChange}/>
      <input className={s.bottomRightInput} name={'surname'}
             value={props.state.surname}
             onChange={handleChange}/>
      <input className={s.bottomRightInput} name={'email'}
             value={props.state.email}
             onChange={handleChange}/>
      <input className={s.bottomRightInput} name={'username'}
             value={props.state.username}
             onChange={handleChange}/>
      <input className={s.bottomRightInput} type={'password'}
             name={'password'} value={props.state.password}
             onChange={handleChange}/>
      <input className={s.bottomRightInput} type={'password'}
             name={'passwordConfirmation'} value={props.state.passwordConfirmation}
             onChange={handleChange}/>
    </div>
  );
};
export default bottomRightInput;