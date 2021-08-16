import {useCartContext} from "../context/CartContext";

const Cart = () => {
    const context = useCartContext();
    console.log(context);
    return (
        <h1>Cart</h1>
    );
};

export default Cart;
