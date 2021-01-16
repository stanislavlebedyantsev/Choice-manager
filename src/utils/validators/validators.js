export const required = value => (!value) ? 'Field is required' : undefined;

export const minLengthForPasswordCreator = minLength => value =>
  (value && value.length < minLength) ?
    `Password cannot be less then ${minLength} symbols` : undefined;


export const maxLengthForPasswordCreator = (maxLength) => value =>
  (value && value.length > maxLength) ? `Password cannot be more then ${maxLength} symbols` : undefined;

export const emailValidation = value =>
  (value &&
    !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      .test(value)) ? 'Invalid email' : undefined;
