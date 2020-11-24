import s from "../Profile.module.css";

const bottomRightInput = (props) => {
  const handleChange = (event) => {
    let obj = {
      ...props.state.user
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
             value={props.state.user.name}
             onChange={handleChange}/>
      <input className={s.bottomRightInput} name={'surname'}
             value={props.state.user.surname}
             onChange={handleChange}/>
      <input className={s.bottomRightInput} name={'email'}
             value={props.state.user.email}
             onChange={handleChange}/>
      <input className={s.bottomRightInput} name={'login'}
             value={props.state.user.login}
             onChange={handleChange}/>
      <input className={s.bottomRightInput} type={'password'}
             name={'password'} value={props.state.user.password}
             onChange={handleChange}/>
      <input className={s.bottomRightInput} type={'password'}
             name={'passwordConfirmation'} value={props.state.user.passwordConfirmation}
             onChange={handleChange}/>
    </div>
  );
};
export default bottomRightInput;