import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar d-flex align-content-center justfiy-content-center">
            <Link to="/" className="logo">
                TheMovie
            </Link>
            <ul className="d-flex">
                <li className="nav_link">
                    <Link to="/trends/pages/1" >
                        Trends
                    </Link>
                </li>
                <li className="nav_link">
                    <Link to="/movies/pages/1" >
                        Movies
                    </Link>
                </li>
                <li className="nav_link">
                    <Link to="/series/pages/1" >
                        Series
                    </Link>
                </li>
                <li className="nav_link">
                    <Link to="/search/pages/1" >
                        Search
                    </Link>
                </li>
            </ul>
            <div className="nav_addition">
                <select className="form-select">
                    <option>EN</option>
                    <option>RU</option>
                    <option>UZ</option>
                </select>
            </div>
        </div>
    )
}

export default Navbar;