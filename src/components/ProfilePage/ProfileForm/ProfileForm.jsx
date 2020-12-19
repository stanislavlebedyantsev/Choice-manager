import s from "../Profile.module.css";
import {fieldCreator, RenderRequiredField} from "../../common/renderRequiredField/renderRequiredField";
import {emailValidation, maxLengthForPasswordCreator, required} from "../../../utils/validators/validators";
import ErrorComponent from "../../common/errorAlert/errorComponent";
import React from "react";


const maxLengthForPassword = maxLengthForPasswordCreator(30);

const ProfileForm = (props) => {
  const {handleSubmit, isError, error} = props;
  return (
    <form onSubmit={handleSubmit} className={s.rightSide}>
      {
        error ?
          <ErrorComponent
            isError={isError}
            errorText={error}
          />
          : null
      }
      <label className={s.textOverInput}>Name</label>
      {fieldCreator("name", "Name", s.bottomRightInputL, RenderRequiredField, [required])}
      <label className={s.textOverInput}>Surname</label>
      {fieldCreator("surname", "Surname", s.bottomRightInputR, RenderRequiredField, [required])}
      <label className={s.textOverInput}>Email</label>
      {fieldCreator("email", "Email", s.bottomRightInputL, RenderRequiredField, [required,emailValidation])}
      <label className={s.textOverInput}>Username</label>
      {fieldCreator("username", "Username", s.bottomRightInputR, RenderRequiredField, [required])}
      <label className={s.textOverInput}>Password</label>
      {fieldCreator("password", "New password", s.bottomRightInputR, RenderRequiredField, [maxLengthForPassword], {type:'password'})}
      <label className={s.textOverInput}>Confirm password</label>
      <div className={s.saveInline}>
        {fieldCreator("passwordConfirmation", "Password confirm", s.bottomRightInputR, RenderRequiredField, [maxLengthForPassword], {type:'password'})}
        <button className={s.btn}>Save</button>
      </div>
    </form>
  );
};
export default ProfileForm;