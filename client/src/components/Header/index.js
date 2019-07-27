import "./style.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="c-header">
        <h1>Logo</h1>
        <nav>
          <Link to="/">TWEEDR</Link>
          {(userName && <Link to="/">${userName}</Link>) || (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </nav>
      </div>
    );
  }
}
export default Header;
