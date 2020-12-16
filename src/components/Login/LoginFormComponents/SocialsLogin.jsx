import s from "../LoginComponent.module.css";

export const API_BASE_URL = 'http://localhost:8080';
export const ACCESS_TOKEN = 'accessToken';

export const OAUTH2_REDIRECT_URI = 'http://localhost:3000/oauth2/redirect'

export const GOOGLE_AUTH_URL = API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const FACEBOOK_AUTH_URL = API_BASE_URL + '/oauth2/authorize/facebook?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const GITHUB_AUTH_URL = API_BASE_URL + '/oauth2/authorize/github?redirect_uri=' + OAUTH2_REDIRECT_URI;

const SocialsLogin= (props) =>{
  return(
    <div className={s.signFrom}>
        <a href={GOOGLE_AUTH_URL} className={s.signGoogle}>
          Login with Google
        </a>
        <a href={GOOGLE_AUTH_URL} className={s.signFacebook}>
          Login with Facebook
        </a>
    </div>
  )
}
export default SocialsLogin