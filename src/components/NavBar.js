import {Fragment} from "react";
import {NavLink} from "react-router-dom";
import Nav from "./Nav";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <Fragment>
            <header className="clearfix mb2 p1 white bg-black">
                <div className="left">
                    <NavLink to="/" className="btn">My Commerce</NavLink>
                </div>
                <div className="right align-middle">
                    <Nav/>
                    <CartWidget/>
                </div>
            </header>
        </Fragment>
    );
};

export default NavBar;
