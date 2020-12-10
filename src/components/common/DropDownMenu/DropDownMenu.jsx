import s from './DropDownMenu.module.css';
import {NavLink} from "react-router-dom";
import dropdown from "../../../images/dropdown.svg"

const DropDownMenu = (props) => {
  const handleClick = (event) => {
    props.logout()
  }
  return (
    <div className={s.dropDownContainer}>
      <span><img src={dropdown} alt="" className={s.imgDropdown}/>Menu</span>
      <div className={s.dropDownLinks}>
        <NavLink to={`/${props.linkTo}`}>{props.linkTo}</NavLink>
        <NavLink to={`/login`} onClick={handleClick}>logout</NavLink>
      </div>
    </div>
  )
}
export default DropDownMenu