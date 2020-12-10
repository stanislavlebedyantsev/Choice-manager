import s from "../Profile.module.css";

const topSide = (props) => {
  const handleClick = () => {
    props.profilePutState(props.state);
  };
  const handleFile = (event) => {
    
  }
  return (
    <div className={s.leftSide}>
      <div className={s.userImg}>
        <div className={s.userPhoto}/>
        <label htmlFor="file">
          <input type="file" id={'file'} className={s.inputFile} name={'file'} accept={".jpg, .png, .jpeg"}/>
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