import {useCartContext} from "../context/CartContext";

const CartItem = ({item: {id, title, price}, quantity, subtotal}) => {
    const {removeItem} = useCartContext();

    return (
        <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>{quantity}</td>
            <td>${price}</td>
            <td>${subtotal}</td>
            <td><button onClick={() => removeItem(id)}>X</button></td>
        </tr>
    )
}

export default CartItem;
