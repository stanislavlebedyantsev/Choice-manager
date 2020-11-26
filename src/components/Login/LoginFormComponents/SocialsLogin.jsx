import s from "../LoginComponent.module.css";
import {NavLink} from "react-router-dom";

export const API_BASE_URL = 'http://localhost:8080';
export const ACCESS_TOKEN = 'accessToken';

export const OAUTH2_REDIRECT_URI = 'http://localhost:3000/oauth2/redirect'

export const GOOGLE_AUTH_URL = API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const FACEBOOK_AUTH_URL = API_BASE_URL + '/oauth2/authorize/facebook?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const GITHUB_AUTH_URL = API_BASE_URL + '/oauth2/authorize/github?redirect_uri=' + OAUTH2_REDIRECT_URI;

const SocialsLogin= (props) =>{
  return(
    <div className={s.socials}>
      <h3 className={s.rightLoginh2}>Login by Social Network</h3>
      <a href={GOOGLE_AUTH_URL}>Login with Google </a>
    </div>
  )
}
export default SocialsLogin