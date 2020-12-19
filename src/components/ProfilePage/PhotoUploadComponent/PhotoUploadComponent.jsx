import s from "../Profile.module.css";

const PhotoUploadComponent = ({editProfilePhoto, state}) => {
  const handleFile = (event) => {
    let file = event.target.files[0];
    editProfilePhoto(file);
  };
  return (
    <div className={s.leftSide}>
      <div className={s.userAvatar}>
        <div className={s.userPhoto}>
          {
            state.imageUrl ?
              <img src={`data:image/png;base64,${state.imageUrl}`} alt="photo"/> : null
          }
        </div>
        <label htmlFor="file">
          <input type="file" id={'file'} className={s.inputFile}
                 name={'file'} accept={".jpg, .png"}
                 onChange={handleFile}
          />
          <div className={s.uploadBtn}>Upload photo</div>
        </label>
      </div>
    </div>
  );
};
export default PhotoUploadComponent;