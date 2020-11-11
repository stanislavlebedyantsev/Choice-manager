import s from "./errorComponent.module.css"
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";
import React from "react";

const ErrorComponent = (props) => {
  return (
    <div className={s.alert}>
      {
        props.isError ?
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {props.errorText}
          </Alert> : null
      }
    </div>
  );
};
export default ErrorComponent;