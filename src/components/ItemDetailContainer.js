import {Fragment, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import ItemDetail from "./ItemDetail";
import getItem from "../services/getItem";

const ItemDetailContainer = () => {
    const [item, setItem] = useState(undefined);
    const [loading, setLoading] = useState(true);

    const {id} = useParams();

    useEffect(() => {
        getItem(id)
            .then((data) => {
                setItem(data);
                setLoading(false);
            })
            .catch(e => {
                console.log(e)
                setLoading(false);
            })
    }, [id]);

    return (
        <Fragment>
            {loading === true ? (
                <p>Cargando</p>
            ) : (
                <Fragment>
                    {typeof item === "undefined" ? (
                        <p>Item no encontrado</p>
                    ) : (
                        <ItemDetail item={item}/>
                    )}
                </Fragment>
            )}
        </Fragment>
    );
};

export default ItemDetailContainer;
