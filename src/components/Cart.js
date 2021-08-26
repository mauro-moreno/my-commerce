import {useCartContext} from "../context/CartContext";
import {Fragment} from "react";
import {NavLink} from "react-router-dom";
import CartItem from "./CartItem";

const Cart = () => {
    const {items, clear, getTotal} = useCartContext();

    return (
        <Fragment>
            <h1>Carrito</h1>
            <button onClick={() => clear()}>Limpiar carrito</button>
            {items.length === 0 ? (
                <Fragment>
                    <p>No hay items en el carrito</p>
                    <NavLink to="/">Volver</NavLink>
                </Fragment>
            ) : (
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Producto:</th>
                        <th>Cantidad:</th>
                        <th>Precio:</th>
                        <th>Subtotal:</th>
                        <th/>
                    </tr>
                    </thead>
                    <tbody>
                    {items.map(item => {
                        return (
                            <CartItem key={item.item.id} {...item} />
                        );
                    })}
                    </tbody>
                    <tfoot>
                    <tr>
                        <th colSpan={4}>Total</th>
                        <th>${getTotal()}</th>
                        <th/>
                    </tr>
                    </tfoot>
                </table>
            )}
        </Fragment>
    );
};

export default Cart;
