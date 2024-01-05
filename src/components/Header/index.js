import {Link} from "react-router-dom"

import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="logo-and-title-container">
    <Link className="route-link" to="/">
      <h1 className="title">Madelyn Torff</h1>
      </Link>
    </div>

    <ul className="nav-items-list">
      <li className="link-item">
        <Link className="route-link" to="/">
          About
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/projects">
          Projects
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/contacts">
          Contacts
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header