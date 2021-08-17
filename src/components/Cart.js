import {useCartContext} from "../context/CartContext";
import {Fragment} from "react";
import {NavLink} from "react-router-dom";

const Cart = () => {
    const context = useCartContext();
    return (
        <Fragment>
            <h1>Carrito</h1>
            <button onClick={() => context.clear()}>Limpiar carrito</button>
            {context.items.length === 0 ? (
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
                    {context.items.map(({item, quantity}) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{quantity}</td>
                                <td>${item.price}</td>
                                <td>${quantity * item.price}</td>
                                <td><button onClick={() => context.removeItem(item.id)}>X</button></td>
                            </tr>
                        );
                    })}
                    </tbody>
                    <tfoot>
                    <tr>
                        <th colSpan={4}>Total</th>
                        <th>${context.items.reduce((total, {item: {price}, quantity}) => {
                            return total + price * quantity;
                        }, 0)}</th>
                        <th/>
                    </tr>
                    </tfoot>
                </table>
            )}
        </Fragment>
    );
};

export default Cart;
