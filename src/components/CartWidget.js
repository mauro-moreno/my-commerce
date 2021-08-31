import {Fragment, memo} from "react";
import {NavLink} from "react-router-dom";
import {useCartContext} from "../context/CartContext";
import "./CartWidget.css";

const CartWidget = () => {
    const {items, getQuantity} = useCartContext();
    return (
        <Fragment>
            {items.length === 0 ? null : (
                <Fragment>
                    <span className="cart-widget-icon">cart</span>
                    <NavLink to="/cart" className="cart-widget">({getQuantity()})</NavLink>
                </Fragment>
            )}
        </Fragment>
    );
};

export default memo(CartWidget);
