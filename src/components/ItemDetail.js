import {Fragment, useState} from "react";
import ItemCount from "./ItemCount";
import {NavLink} from "react-router-dom";

const ItemDetail = ({item: {title, description, price, pictureUrl, stock, initial}}) => {
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
                    <NavLink to="/cart" className="btn btn-outline">Terminar la compra</NavLink>
                </Fragment>
            ) : (
                <ItemCount stock={stock} initial={initial && 1} onAdd={addItem}/>
            )}
        </Fragment>
    );
};

export default ItemDetail;
