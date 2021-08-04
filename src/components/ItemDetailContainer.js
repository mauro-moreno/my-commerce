import {Fragment, useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";
import getItem from "../services/getItem";

const ItemDetailContainer = () => {
    const [item, setItem] = useState(undefined);

    useEffect(() => {
        getItem(1)
            .then((data) => {
                setItem(data);
            })
    });

    return (
        <Fragment>
            {typeof item === "undefined" ? (
                <p>Cargando</p>
            ) : (
                <ItemDetail item={item}/>
            )}
        </Fragment>
    );
};

export default ItemDetailContainer;
