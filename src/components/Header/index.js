import {Link} from "react-router-dom"

import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="logo-and-title-container">
    <Link className="route-link" to="/">
      <img className="logo-image" alt="logo" src="https://media.konfhub.com/konfhub-logo-purple.svg"/>
      </Link>
    </div>

    
  </nav>
)

export default Header