import s from "../Profile.module.css";

const bottomLeftText = (props) =>{
    return(
            <div className={s.bottomLeftSide}>
                <p className={s.bottomLeftText}>First name</p>
                <p className={s.bottomLeftText}>Second name</p>
                <p className={s.bottomLeftText}>Email</p>
                <p className={s.bottomLeftText}>Username</p>
                <p className={s.bottomLeftText}>Phone number</p>
                <p className={s.bottomLeftText}>Title</p>
                <p className={s.bottomLeftText}>Password</p>
            </div>
    )
}
export default bottomLeftText