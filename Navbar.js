import React from 'react';

function Navbar() {
  return (
    <nav>
      <h1>Go <span style={{color: 'gold'}}>Tax</span></h1>
      <ul>
        <li>Home</li>
        <li>Calculator</li>
        <li>How it works?</li>
        <li>Tax Info</li>
      </ul>
    </nav>
  );
}

export default Navbar;
