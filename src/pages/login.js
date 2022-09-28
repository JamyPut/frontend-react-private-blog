import React from 'react';
import {Link, useHistory} from "react-router-dom";


function LoginPage(){

    const history = useHistory();
    return(
        <>
            <p>login pagina</p>
            <button onClick={() => history.push("/blogoverview")}>Inloggen</button>
        </>
    )
}
export default LoginPage;