import s from "./errorComponent.module.css";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";
import React from "react";

const ErrorComponent = ({errorText}) => {
  return (
    <div className={s.alert}>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        {errorText}
      </Alert>
    </div>
  );
};
export default ErrorComponent;