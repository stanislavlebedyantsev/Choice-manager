import * as axios from "axios";

const testingAxios = axios.create({
  baseURL: 'http://127.0.0.1:8080/test',
  headers: {
    Authorization: `${localStorage.getItem('tokenType')} ${localStorage.getItem('accessToken')}`
  }
});

export const testingAPI = {
  getTest(){
    return testingAxios.get('').then(response => response.data)
  },
  postAnswers(data) {
    return testingAxios
      .post("", data).then(response => response.data);
  }
};

