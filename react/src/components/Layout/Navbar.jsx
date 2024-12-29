import React from "react";
import { NavLink } from "react-router-dom";
//import "./Navbar.css";

function Navbar() {
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
    };

    return (
        <nav>
            <h1>My Website</h1>
            <ul>
                <li>
                    <NavLink
                        to="/"
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                        end
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
