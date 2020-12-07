import s from "../Profile.module.css";

const topSide = (props) => {
    const handleClick = () => {
        props.profilePutState(props.state)
    }
    return (
        <div className={s.leftSide}>
            <div className={s.userImg}>
                <div className={s.userPhoto}/>
                <button className={s.btn}>
                    Upload photo
                </button>
                <div>
                    <button className={s.btn} onClick={handleClick}>
                        Save
                    </button>
                </div>
            </div>
            <div className={s.uploadImg}/>
        </div>
    );
};
export default topSide;