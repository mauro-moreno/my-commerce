import {Fragment} from "react";
import {NavLink} from "react-router-dom";
import {useCartContext} from "../context/CartContext";
import CartItem from "./CartItem";
import User from "./User";

const Cart = () => {
    const {checkout, clear, getTotal, items, order, user} = useCartContext();

    return (
        <Fragment>
            <h1>Carrito</h1>
            {typeof order !== "undefined" ? <h2>Id de orden: {order}</h2> : null}
            {typeof user !== "undefined" ? <User user={user} /> : "Cargando..."}
            {items.length === 0 ? (
                <Fragment>
                    <p>No hay items en el carrito</p>
                    <NavLink to="/">Volver</NavLink>
                </Fragment>
            ) : (
                <Fragment>
                    {typeof order === "undefined" ? <button onClick={() => checkout()}>Finalizar compra</button> : null}
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
                    {typeof order === "undefined" ? <button onClick={() => clear()}>Limpiar carrito</button> : null}
                </Fragment>
            )}
        </Fragment>
    );
};

export default Cart;
