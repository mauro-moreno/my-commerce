import {Fragment} from "react";
import Nav from "./Nav";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <Fragment>
            <header className="clearfix mb2 p1 white bg-black">
                <div className="left">
                    <a href="/" className="btn">My Commerce</a>
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
