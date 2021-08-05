import React from "react";
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className="left">
            <NavLink to="/category/1" className="btn py2">Categoria 1</NavLink>
            <NavLink to="/category/2" className="btn py2">Categoria 2</NavLink>
        </nav>
    );
};

export default Nav;
