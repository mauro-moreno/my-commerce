import {Fragment, useEffect, useState} from "react";
import Item from "./Item";
import getItems from "../services/getItems";

const ItemList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getItems()
            .then((data) => {
                setItems(data);
            })
    })

    return (
        <Fragment>
            {items.length === 0 ? (
                <p>Cargando</p>
            ) : (
                <Fragment>
                    {items.map((item) => {
                        return <Item key={item.id} item={item}/>;
                    })}
                </Fragment>
            )}
        </Fragment>
    );
};

export default ItemList;
