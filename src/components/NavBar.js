import {Fragment} from "react";
import {NavLink} from "react-router-dom";
import Nav from "./Nav";
import CartWidget from "./CartWidget";
import "./NavBar.css";

const NavBar = () => {
    return (
        <Fragment>
            <header>
                <div className="logo-container">
                    <NavLink exact to="/" className="logo">My Commerce</NavLink>
                </div>
                <div className="navigator-container">
                    <Nav/>
                    <CartWidget/>
                </div>
            </header>
        </Fragment>
    );
};

export default NavBar;
