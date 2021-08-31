import React, {memo} from "react";
import {NavLink} from "react-router-dom";
import {useCategoriesContext} from "../context/CategoriesContext";
import "./Nav.css";

const Nav = () => {
    const {categories} = useCategoriesContext();

    return (
        <nav>
            {categories.map(({id, name}) => {
                return (
                    <NavLink key={id} to={`/category/${id}`}>
                        {name}
                    </NavLink>
                )
            })}
        </nav>
    );
};

export default memo(Nav);
