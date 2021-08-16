import {createContext, useContext, useState} from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const {Provider} = CartContext;
const CartContextProvider = ({children}) => {
    const [items, setItems] = useState([]);

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            return false;
        }
        setItems([...items, {item, quantity}]);
    };

    const removeItem = itemId => {
        // placeholder
    };

    const clear = () => {
        // placeholder
    }

    const isInCart = itemId => {
        return items.some((i) => i.item.id === itemId);
    }

    const context = {
        items,
        addItem,
        removeItem,
        clear,
        isInCart
    }

    return (
        <Provider value={context}>
            {children}
        </Provider>
    );
};

export {CartContextProvider};
