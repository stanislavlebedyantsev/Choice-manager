import * as axios from "axios";

const testingAxios = axios.create({
  baseURL: `http://127.0.0.1:8080`,
  headers: {
    Authorization: `${sessionStorage.getItem('tokenType')} ${sessionStorage.getItem('accessToken')}`
  }
});

export const testingAPI = {
  getTest(currentPage){
    return testingAxios.get(`test?pageNumber=${currentPage}`).then(response => response.data)
  },
  postAnswers(data) {
    return testingAxios
      .post("test", data).then(response => response.data);
  }
};

