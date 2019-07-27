import "./style.css";
import React from "react";

export default (Footer = props => {
  const { loggedIn } = props;
  return (
    <>
      {loggedIn && (
        <div className="c-footer">
          <Link to="/logout">Logout</Link>
        </div>
      )}
    </>
  );
});
