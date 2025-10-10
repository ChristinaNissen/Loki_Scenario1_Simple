import React from "react";
import { MdHelpOutline, MdHome } from "react-icons/md";
import "./Navbar.css";

const Navbar = () => (
  <header className="navbar">
    <div className="navbar-logo">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/b/b3/Coat_of_Arms_of_Denmark.svg"
        alt="Agency Logo"
      />
      <span>Agency for Online Voting</span>
    </div>
    <nav className="navbar-links">
      <a href="/help">
        <MdHelpOutline size={20} style={{ verticalAlign: "middle", marginRight: 4 }} />
        Help
      </a>
      <a href="/">
        <MdHome size={20} style={{ verticalAlign: "middle", marginRight: 4 }} />
        Home
      </a>
    </nav>
  </header>
);

export default Navbar;