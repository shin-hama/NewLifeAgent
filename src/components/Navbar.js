import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'

const Navbar = class extends React.Component {
  render() {
    return (
      <nav className="navbar is-transparent" role="navigation" aria-label="main-navigation">
        <div className="container" style={{ display: 'flex', alignItems: 'baseline' }}>
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Logo" style={{ width: '88px' }} />
            </Link>
          </div>
          <div id="navMenu">
            <div className="navbar-start has-text-centered" style={{ display: 'flex' }}>
              <Link className="navbar-item" to="/about" style={{ display: 'flex' }}>
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
