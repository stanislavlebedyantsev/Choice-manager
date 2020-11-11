import * as axios from "axios";

const loginAxios = axios.create({
  baseURL: 'http://127.0.0.1:8080/auth/login'
});

export const loginAPI = {
  postLogin(data) {
    return loginAxios
      .post("", data).then(response => response.data);
  }
};

