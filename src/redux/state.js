let AppRender = () => {
  console.log('State changed');
}

let state = {
  mainPage: {},
  loginPage: {
    login: '',
    password: ''
  },
  registrationPage: {
    login: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    name: '',
    surname: ''
  }
}

export const loginUpdateText = (newData) => {
  state.loginPage = newData;
  AppRender()
}
export const registrationUpdateText = (newData) => {
  state.registrationPage = newData
  AppRender()
}
//request to server test version


export const login = async () => {
  const response = await fetch("http://127.0.0.1:8080/login", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(state.loginPage)
  }).catch(
    () => {
      state.loginPage = {
        login: '',
        password: ''
      }
    }
  )
  AppRender()
}

export const registration = async (props) => {
  const response = await fetch("http://127.0.0.1:8080/registration", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(state.registrationPage)
  }).catch(
    () => {
      state.registrationPage = {
        login: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        name: '',
        surname: ''
      }
      AppRender()
    }
  )
}

export const subscribe = (observer) => {
  AppRender = observer
}
export default state