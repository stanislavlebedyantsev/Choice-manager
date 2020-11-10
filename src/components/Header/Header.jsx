import s from './Header.module.css'
import {NavLink} from "react-router-dom";



const Header = (props) => {
  return (
    <nav className={s.content}>
      <div className={s.logo}>
        Choice manager
      </div>
      <div className={s.signIn}>
        <NavLink to="/login">SignIn</NavLink>
      </div>
    </nav>
  )
}

export default Header