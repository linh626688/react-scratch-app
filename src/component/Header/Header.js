import React, {Component} from 'react';
import {WrapperHeader} from "./styles";
import {Link, NavLink} from "react-router-dom";

class Header extends Component {

  render() {
    return (
      <WrapperHeader>
        <header className="app-header">
          <div className="container">
            <div className="app-branding">
              <Link to="/" className="app-title">App Scratch</Link>
            </div>
            <div className="app-options">
              <nav className="app-nav">
                <ul>
                  <li>
                    <NavLink to="/login">Login</NavLink>
                  </li>
                  <li>
                    <NavLink to="/signup">Signup</NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
      </WrapperHeader>
    );
  }

}

export default Header;
