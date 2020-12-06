import * as axios from "axios";

const registrationAxios = axios.create({
  baseURL: 'http://127.0.0.1:8080/registration'
});

export const registrationAPI = {
  postRegistration(data) {
    return registrationAxios
      .post("", data).then(response => response.data);
  }
};

