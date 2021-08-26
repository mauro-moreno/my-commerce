import {Fragment, memo} from "react";
import {NavLink} from "react-router-dom";
import {useCartContext} from "../context/CartContext";

const CartWidget = () => {
    const {items, getQuantity} = useCartContext();
    return (
        <Fragment>
            {items.length === 0 ? null : (
                <div className="right">
                    <div className="btn">
                        <i>cart</i>
                        <NavLink to="/cart">({getQuantity()})</NavLink>
                    </div>
                </div>
            )}
        </Fragment>
    );
};

export default memo(CartWidget);
