import ErrorComponent from "../errorAlert/errorComponent";
import s from './requiredField.module.css';
import React from "react";
import {Field} from "redux-form";

export const RenderRequiredField = ({input, meta, className, ...props}) => {
  const isError = meta.touched && meta.error;
  return (
    <div>
      {
        isError ?
          <ErrorComponent
            isError={isError}
            errorText={meta.error}
          />
          : null
      }
      <input className={className + ' ' + (isError ? s.error : '')} {...input} {...props}/>
    </div>
  );
};

export const fieldCreator = (name, placeholder, className, component, validate=[], props = {}) =>{
  return (
    <Field name={name} placeholder={placeholder}
           className={className}
           component={component}
           validate={validate}
           {...props}
    />
  )
}