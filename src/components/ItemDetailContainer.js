import {Fragment, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import ItemDetail from "./ItemDetail";
import getItem from "../services/getItem";

const ItemDetailContainer = () => {
    const [item, setItem] = useState(undefined);

    const {id} = useParams();

    useEffect(() => {
        getItem(parseInt(id))
            .then((data) => {
                setItem(data);
            })
    }, [id]);

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
