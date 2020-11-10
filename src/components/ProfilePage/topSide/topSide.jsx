import s from "../Profile.module.css";

const topSide = (props) =>{
    return(
        <div className={s.topSide}>
            <div className={s.topLeftSide}>
                <div className={s.profileImg}></div>
                <h2 className={s.accountH2}>Account</h2>
            </div>
            <div className={s.topRightSide}>
                <button className={s.saveChange}>Save</button>
                <h1 className={s.usernameH1}>Username</h1>
                <h2 className={s.emailH2}>name@mail.com</h2>
                <p className={s.downloadP}>Click here to download your photo or upload your own..</p>
                <button className={s.downloadButton}>
                    <p className={s.buttonDownloadText}> Click on this area to upload your photo</p>
                </button>
            </div>
        </div>
    )
}
export default topSide