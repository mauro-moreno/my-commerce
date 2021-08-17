import {Fragment, memo} from "react";
import {useCartContext} from "../context/CartContext";
import {NavLink} from "react-router-dom";

const CartWidget = () => {
    const {items} = useCartContext();
    return (
        <Fragment>
            {items.length === 0 ? null : (
                <div className="right">
                    <div className="btn">
                        <i>cart</i>
                        <NavLink to="/cart">({items.reduce((total, {quantity}) => {
                            return total + quantity
                        }, 0)})</NavLink>
                    </div>
                </div>
            )}
        </Fragment>
    );
};

export default memo(CartWidget);
