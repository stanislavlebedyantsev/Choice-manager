import * as axios from "axios";

const goalsAxios = axios.create({
  baseURL: 'http://127.0.0.1:8080/goals',
  headers: {
    Authorization: `${sessionStorage.getItem('tokenType')} ${sessionStorage.getItem('accessToken')}`
  }
});

export const goalsAPI = {
  getGoals() {
    return goalsAxios
      .get("").then(response => response.data);
  },
  putGoals(obj) {
    return goalsAxios
      .put("", {
        ...obj
      }).then(response => response.data);
  },
  postGoals(obj) {
    return goalsAxios
      .post("/create", {
        ...obj
      }).then(response => response.data);
  },
  deleteGoals(id) {
    return goalsAxios
      .delete("", {data: {id}}).then(response => response.data);
  }
};

