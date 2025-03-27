import React from "react";
import { useAuth } from "../../hooks/AuthProvider";
// /Users/callumbatten-plowright/Documents/Applications/wishlister-client/src/hooks/AuthProvider.jsx
// /Users/callumbatten-plowright/Documents/Applications/wishlister-client/src/components/navbar-components/LogOutButton.jsx
const LogOutButton = () => {

    return (<>
        <button onClick={useAuth().logoutUser}>Log Out</button>
    </>);
}

export default LogOutButton;