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

        <div className={s.rightSide}>
            {/*<button className={s.saveChange}>Save</button>*/}
            <p className={s.textOverInput}>Name </p>
            <input className={s.bottomRightInputL} name={'name'}
                   value={props.state.name}
                   onChange={handleChange}/>
            <p className={s.textOverInput}>Surname</p>
            <input className={s.bottomRightInputR} name={'surname'}
                   value={props.state.surname}
                   onChange={handleChange}/>
            <p className={s.textOverInput}>Email</p>
            <input className={s.bottomRightInputL} name={'email'}
                   value={props.state.email}
                   onChange={handleChange}/>
            <p className={s.textOverInput}>Username</p>
            <input className={s.bottomRightInputR} name={'username'}
                   value={props.state.username}
                   onChange={handleChange}/>
            <p className={s.textOverInput}>Password</p>
            <input className={s.bottomRightInputL} type={'password'}
                   name={'password'} value={props.state.password}
                   onChange={handleChange}/>
            <p className={s.textOverInput}>Confirm password</p>
            <input className={s.bottomRightInputR} type={'password'}
                   name={'passwordConfirmation'} value={props.state.passwordConfirmation}
                   onChange={handleChange}/>

        </div>
    );
};
export default bottomRightInput;