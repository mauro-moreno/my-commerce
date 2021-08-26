import React, {memo} from "react";
import {NavLink} from "react-router-dom";
import {useCartContext} from "../context/CartContext";

const Nav = () => {
    const {categories} = useCartContext();

    return (
        <nav className="left">
            {categories.map(({id, name}) => {
                return (
                    <NavLink key={id} to={`/category/${id}`} className="btn py2">
                        {name}
                    </NavLink>
                )
            })}
        </nav>
    );
};

export default memo(Nav);
