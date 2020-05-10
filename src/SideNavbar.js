import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [collapsed, setCollapsed] = useState('collapse');
  const onCollapse = () => {
    setCollapsed(collapsed === '' ? 'collapse' : '')
  }
  const onHide = () => {
    setCollapsed('collapse');
  }
  return (
    <nav className={`navbar navbar-side navbar-side-left navbar-side-sm navbar-dark bg-dark-alpha-2 h-font ${collapsed}`}  id="sideNavbar">
      <div className="navbar-brand-container bg-dark-alpha-1">
        <Link onClick={onHide} className="navbar-brand" to="/">
          <span>Bootlaterus React</span>
        </Link>
      </div>
      <button className="navbar-toggler" type="button" onClick={onCollapse} aria-controls="sideNavbar" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <ul className="navbar-nav">
        <li><Link onClick={onHide} className="nav-link" to="/">Option</Link></li>
        <li><Link onClick={onHide} className="nav-link" to="/option1">Option 1</Link></li>
        <li><Link onClick={onHide} className="nav-link" to="/option2">Option 2</Link></li>
      </ul>
    </nav>
  )
}  
export default Header;
