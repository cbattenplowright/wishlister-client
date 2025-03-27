import React from "react";
import { useAuth } from "../hooks/AuthProvider";

const LogOutButton = () => {

    return (<>
        <button onClick={useAuth().logout}>Log Out</button>
    </>);
}

export default LogOutButton;