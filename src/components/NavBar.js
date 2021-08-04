import React, {Fragment} from "react";
import Nav from "./Nav";

const NavBar = () => {
    return (
        <Fragment>
            <h1><a href="/">My Commerce</a></h1>
            <Nav />
        </Fragment>
    );
};

export default NavBar;
