import React from "react";
import "../styles/Header.css";

/**
 * Header for StoriesContainer
 */

function Header({ values }) {
  return (
    <div className="header_container">
      <h3>Welcome {values.firstName}, Select a Story!</h3>
    </div>
  );
}

export default Header;
