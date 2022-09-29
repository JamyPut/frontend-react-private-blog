import React from 'react';
import {Link, useHistory} from "react-router-dom";


function LoginPage(){

    const history = useHistory();
    return(
        <div className={"page-outline"}>
            <p>login pagina</p>
            <button onClick={() => history.push("/blogoverview")}>Inloggen</button>
        </div>
    )
}
export default LoginPage;