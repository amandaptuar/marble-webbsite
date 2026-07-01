import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <div className="container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src="/logo.png" alt="Rb Marble" className="logo-img" />
        </Link>
        <nav className={`main-nav ${isOpen ? 'open' : ''}`}>
          <ul>
            <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Home</NavLink></li>
            <li><NavLink to="/products" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Products</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>About Us</NavLink></li>
          </ul>
          <a href="/about#contact" className="btn nav-cta" onClick={closeMenu}>Contact Us</a>
        </nav>
        <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setIsOpen(!isOpen)}>
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
