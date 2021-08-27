import {useCartContext} from "../context/CartContext";

const CartItem = ({item: {id, title, price}, quantity, subtotal}) => {
    const {order, removeItem} = useCartContext();

    return (
        <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>{quantity}</td>
            <td>${price}</td>
            <td>${subtotal}</td>
            <td>{typeof order === 'undefined' ? <button onClick={() => removeItem(id)}>X</button> : null}</td>
        </tr>
    )
}

export default CartItem;
