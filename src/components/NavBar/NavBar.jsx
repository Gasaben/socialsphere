import classes from "./NavBar.css"
import { NavLink } from "react-router-dom"
import s from "./NavBar.css"

const NavBar = () => {
    return (
      <nav className="nav-bar">

        <ul id="nav">
          <NavLink to='/ProfilePage'  className={({ isActive }) => isActive ? s.active : undefined} >  <li>Profiles</li> </NavLink>
        <NavLink to='/DialogsPage'   className={({ isActive }) => isActive ? s.active : undefined} >  <li>Message</li> </NavLink>
        <a href="" className="item"> <li>News</li> </a>
         <a href="" className="item"> <li>Music</li> </a>
        <a href="" className="item">  <li>Setting</li></a>
        </ul>
      </nav>

)
}
export default NavBar