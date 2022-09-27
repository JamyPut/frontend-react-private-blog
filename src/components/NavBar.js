import React from 'react';
import {NavLink} from "react-router-dom";

function NavBar() {
    return (
        <nav className={"navigation-bar"}>
            <div className={"navigation-container"}>
                <h2>
                    Secret Society
                </h2>

                <ul className={"navigation-list"}>
                    <li className={"navigation-item"}>
                        <NavLink exact to={"/"}>Home</NavLink>
                    </li>
                    <li className={"navigation-item"}>
                        <NavLink exact to={"/login"}>Login page</NavLink>
                    </li>
                    <li className={"navigation-item"}>
                        <NavLink exact to={"/blogpost/:id"}>Blog posts</NavLink>
                    </li>
                    <li className={"navigation-item"}>
                        <NavLink exact to={"/blogoverview"}>Blog overview</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;