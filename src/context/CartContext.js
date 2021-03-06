import {createContext, useContext, useState} from "react";
import createOrder from "../services/createOrder";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const {Provider} = CartContext;

const CartContextProvider = ({children}) => {
    const [items, setItems] = useState([]);
    const [order, setOrder] = useState();

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            return false;
        }
        setItems([...items, {item, quantity, subtotal: item.price * quantity}]);
    };

    const removeItem = itemId => {
        setItems(items.filter(i => i.item.id !== itemId))
    };

    const clear = () => {
        setItems([]);
    }

    const isInCart = itemId => {
        return items.some((i) => i.item.id === itemId);
    }

    const getTotal = () => {
        return items.reduce((total, {item: {price}, quantity}) => {
            return total + price * quantity;
        }, 0);
    }

    const getQuantity = () => {
        return items.reduce((total, {quantity}) => {
            return total + quantity
        }, 0);
    }

    const checkout = user => {
        const order = {
            buyer: user,
            items: items.map(i => {
                return {
                    id: i.item.id,
                    title: i.item.title,
                    price: i.item.price
                }
            }),
            total: getTotal()
        };
        createOrder(order).then(id => {
            setOrder(id);
        })
    };

    const context = {
        items,
        order,
        addItem,
        removeItem,
        clear,
        isInCart,
        getQuantity,
        getTotal,
        checkout
    }

    return (
        <Provider value={context}>
            {children}
        </Provider>
    );
};

export {CartContextProvider};
