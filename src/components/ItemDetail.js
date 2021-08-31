import {Fragment, useState} from "react";
import {useCartContext} from "../context/CartContext";
import ItemCount from "./ItemCount";
import {NavLink} from "react-router-dom";
import "./ItemDetail.css";

const ItemDetail = ({item}) => {
    const {title, description, price, pictureUrl, stock, initial} = item;
    const context = useCartContext();
    const [count, setCount] = useState();

    const addItem = eventCount => {
        setCount(eventCount)
    };

    return (
        <div className="item-detail">
            <h2>{title}</h2>
            <img src={pictureUrl} alt={title}/>
            <p>{description}</p>
            <p>${price}</p>
            {count ? (
                <Fragment>
                    <p>Cantidad: {count}</p>
                    <NavLink to="/cart" onClick={() => context.addItem(item, count)} className="add-item-to-cart">
                        Terminar la compra
                    </NavLink>
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
        </div>
    );
};

export default ItemDetail;
