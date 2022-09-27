import React from 'react';
import {Link} from "react-router-dom";

function LoginPage(){

    return(
        <>
            <p>login pagina</p>
            <Link exact to={"/blogoverview"}>Inloggen</Link>
        </>
    )
}
export default LoginPage;