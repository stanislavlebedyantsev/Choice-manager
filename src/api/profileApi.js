import * as axios from "axios";

const profileAxios = axios.create({
  baseURL: 'http://127.0.0.1:8080/profile',
  headers: {
    Authorization: `${localStorage.getItem('tokenType')} ${localStorage.getItem('accessToken')}`
  }
});

export const profileAPI = {
  getProfile() {
    return profileAxios
      .get("/me").then(response => response.data);
  },
  putProfile(obj) {
    return profileAxios
      .put("/put", {
        ...obj
      }).then(response => response.data);
  }
};

