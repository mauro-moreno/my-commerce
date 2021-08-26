import {createContext, useContext, useEffect, useState} from "react";
import getCategories from "../services/getCategories";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const {Provider} = CartContext;

const CartContextProvider = ({children}) => {
    const [items, setItems] = useState([]);
    const [categories, setCategories] = useState([]);

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

    const getCategory = categoryId => {
        return categories.find((i) => i.id === categoryId);
    };

    const context = {
        items,
        categories,
        addItem,
        removeItem,
        clear,
        isInCart,
        getCategory,
        getQuantity,
        getTotal
    }

    useEffect(() => {
        getCategories()
            .then(data => {
                setCategories(data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    return (
        <Provider value={context}>
            {children}
        </Provider>
    );
};

export {CartContextProvider};
