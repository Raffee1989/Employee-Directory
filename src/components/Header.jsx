import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className = "container">
      <h1 className = "text-center" >Employee Directory</h1>

      <h6 className = "text-center" >
        <strong>Tip: </strong> Use search box to narrow down your results or click on headings to filter the data!
      </h6>
    </header>
  );
};

export default Header;
