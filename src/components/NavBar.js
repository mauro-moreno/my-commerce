import {Fragment} from "react";
import Nav from "./Nav";
import CartWidget from "./CartWidget";
import ItemListContainer from "./ItemListContainer";

const NavBar = () => {
    return (
        <Fragment>
            <h1><a href="/">My Commerce</a></h1>
            <Nav />
            <CartWidget />
            <ItemListContainer greeting="Hola Mundo" />
        </Fragment>
    );
};

export default NavBar;
