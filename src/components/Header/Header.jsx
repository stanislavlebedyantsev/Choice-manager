import s from './Header.module.css'
import {NavLink} from "react-router-dom";



function Header(props) {
  return (
    <nav className={s.content}>
      <div className={s.logo}>
        Choice manager
      </div>
      <div className={s.signin}>
        <NavLink to="/login">SignIn</NavLink>
      </div>
    </nav>
  )
}

export default Header