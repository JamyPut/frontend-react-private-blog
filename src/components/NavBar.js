import React from 'react';
import {NavLink} from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <div>
                <h2>
                    Secret Society
                </h2>

                <ul>
                    <li>
                        <NavLink exact to={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink exact to={"/login"}>Login page</NavLink>
                    </li>
                    <li>
                        <NavLink exact to={"/blogpost/:id"}>Blogposts</NavLink>
                    </li>
                    <li>
                        <NavLink exact to={"/blogoverview"}>Blog overview</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;