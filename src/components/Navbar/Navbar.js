import React from "react";
import "./Navbar.css";

const Navbar = props =>(
    <nav className="nav navbar-default navbar-fixed-top navbar">
        <div className="container-fluid">
            {/* <div className="navbar-header">
                <a className="navbar-brand" href="/">WebSiteName</a>
            </div> */}
            <div className="nav-elements">
                Your Score : <span id="yourScore">{props.yourScore}</span> | Highest Score : <span id="highestScore">{props.highestScore}</span>
            </div>
        </div>
    </nav>
)

export default Navbar;

