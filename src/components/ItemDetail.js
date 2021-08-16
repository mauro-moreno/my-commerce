import {Fragment, useState} from "react";
import {useCartContext} from "../context/CartContext";
import ItemCount from "./ItemCount";
import {NavLink} from "react-router-dom";

const ItemDetail = ({item}) => {
    const {title, description, price, pictureUrl, stock, initial} = item;
    const context = useCartContext();
    const [count, setCount] = useState();

    const addItem = eventCount => {
        setCount(eventCount)
    };

    return (
        <Fragment>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>${price}</p>
            <img src={pictureUrl} alt={title}/>
            {count ? (
                <Fragment>
                    <p>Cantidad: {count}</p>
                    <NavLink to="/cart" className="btn btn-outline" onClick={() => context.addItem(item)}>Terminar la
                        compra</NavLink>
                </Fragment>
            ) : (
                <Fragment>
                    {context.isInCart(item.id) ? (
                        <p>Producto ya agregado en el carrito</p>
                    ) : (
                        <ItemCount stock={stock} initial={initial && 1} onAdd={addItem}/>
                    )}
                </Fragment>
            )}
        </Fragment>
    );
};

export default ItemDetail;
