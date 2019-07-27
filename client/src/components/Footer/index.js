import "./style.css";
import React from "react";

export default (Footer = props => {
  const { userName } = props;
  return (
    <>
      {userName && (
        <div className="c-footer">
          <Link to="/logout">Logout</Link>
        </div>
      )}
    </>
  );
});
