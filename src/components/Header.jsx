import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="montserrat header-el">
      <div className="header-content">
        <h1 className="title">Bookstore CMS</h1>
        <nav className="nav-bar">
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Book
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/categories">
                CATEGORIES
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="person-profile-container" id="profile-img" />
    </header>
  );
}
