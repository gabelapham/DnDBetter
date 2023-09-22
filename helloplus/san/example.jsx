import React from 'react';

//make title and navigation menu
function Header() {
  return (
    <div className="header">
      <h1>My Website</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
