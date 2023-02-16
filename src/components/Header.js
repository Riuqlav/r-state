import React from "react";

function Header() {
  return (
    <div>
      <header>
        <div>
          <img
            className="h-10 w-15"
            src={process.env.PUBLIC_URL + "/logo.png"}
            alt=""
          />{" "}
          <h1>ReactHome.com</h1>
        </div>
      </header>
    </div>
  );
}

export default Header;
