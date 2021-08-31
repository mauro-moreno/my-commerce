import {Fragment} from "react";
import {NavLink} from "react-router-dom";
import {useCartContext} from "../context/CartContext";
import {useUserContext} from "../context/UserContext";
import CartItem from "./CartItem";
import User from "./User";
import "./Cart.css";

const Cart = () => {
    const {checkout, clear, getTotal, items, order} = useCartContext();
    const {user} = useUserContext();

    return (
        <div className="cart-container">
            <div className="cart">
                <h1>Carrito</h1>
                {typeof order !== "undefined" ? <h2>Id de orden: {order}</h2> : null}
                {typeof user !== "undefined" ? <User user={user}/> : "Cargando..."}
                {items.length === 0 ? (
                    <Fragment>
                        <p>No hay items en el carrito</p>
                        <NavLink to="/" className="cart-back">Volver</NavLink>
                    </Fragment>
                ) : (
                    <Fragment>
                        {typeof order === "undefined" ?
                            <button onClick={() => checkout(user)}>Finalizar compra</button> : null}
                        <table>
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th><span>Producto</span></th>
                                <th><span>Cantidad </span>#</th>
                                <th><span>Precio unidad </span>$/u</th>
                                <th><span>Subtotal </span>$</th>
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
            </div>
        </div>
    );
};

export default Cart;
