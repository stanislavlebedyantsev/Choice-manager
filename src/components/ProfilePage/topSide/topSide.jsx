import s from "../Profile.module.css";

const topSide = (props) => {
  const handleClick = () => {
    props.profilePutState(props.state);
  };
  const handleFile = (event) => {
    let file = event.target.files[0];
    props.editProfilePhoto(file);
  };
  return (
    <div className={s.leftSide}>
      <div className={s.userAvatar}>
        <div className={s.userPhoto}>
          {
            props.state.imageUrl ?
            <img src={`data:image/png;base64,${props.state.imageUrl}`} alt="photo"/> : null
          }
        </div>
        <label htmlFor="file">
          <input type="file" id={'file'} className={s.inputFile}
                 name={'file'} accept={".jpg, .png"}
                 onChange={handleFile}
          />
          <div className={s.uploadBtn}>Upload photo</div>
        </label>
        {/*<button className={s.btn}>
          Upload photo
        </button>*/}
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