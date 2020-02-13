import React from "react";

function Header(props) {
  return (
    <header>
      <div className="uk-grid-expand uk-grid">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="232.06"
            viewBox="0 0 200 232.06"
            className="logo"
          >
            <path d="M0 232.06h45.13V0H0z" />
            <path d="M102.03 82.97c17.65 4.84 34.05 12.72 48.57 23.05C180.7 80.55 199.85 42.52 199.85 0h-46.2c0 36.4-21.04 67.87-51.62 82.97" />
            <path d="M61.1 93.17v45.72c51.48 0 93.18 41.7 93.18 93.15H200c0-76.7-62.18-138.9-138.9-138.9" />
          </svg>
        </div>
        <div>
          <h1>Food Cost Calculator (Alpha)</h1>
        </div>
      </div>
      {/* <hr />
        <nav className="mainNav">
          <ul>
            <li>
              <Link to="/sign-in">Sign In</Link>
            </li>
            <li>
              <Link to="/ingredients">Ingredients</Link>
            </li>
            <li>
              <Link to="/margin">Margin</Link>
            </li>
            <li>
              <Link to="/summary">Summary</Link>
            </li>
          </ul>
        </nav> */}
      <hr />
    </header>
  );
}

export default Header;
