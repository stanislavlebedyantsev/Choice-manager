import s from "../Profile.module.css";

const topSide = (props) => {
  const handleClick = () =>{
    props.profilePutState()
  }
  return (
    <div className={s.leftSide}>
        <div className={s.userImg}>
          <div className={s.userPhoto}>
          </div>
        </div>
      <div className={s.uploadImg}>
        <button className={s.btn}>
          Upload photo
        </button>
      </div>
      {/*<div className={s.topLeftSide}>*/}
      {/*  <div className={s.profileImg}></div>*/}
      {/*  /!*<h2 className={s.accountH2}>Account</h2>*!/*/}
      {/*</div>*/}
      {/*<div className={s.topRightSide}>*/}
      {/*  <button className={s.saveChange} onClick={handleClick}>Save</button>*/}
      {/*  <h1 className={s.usernameH1}>{localStorage.getItem('username')}</h1>*/}
      {/*  <h2 className={s.emailH2}>{localStorage.getItem('email')}</h2>*/}
      {/*  <p className={s.downloadP}>Click here to download your photo or upload your own..</p>*/}
      {/*  <button className={s.downloadButton}>*/}
      {/*    <p className={s.buttonDownloadText}> Click on this area to upload your photo</p>*/}
      {/*  </button>*/}
      {/*</div>*/}
    </div>
  );
};
export default topSide;