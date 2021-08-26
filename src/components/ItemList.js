import {Fragment, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import getItems from "../services/getItems";
import Item from "./Item";

const ItemList = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {categoryId} = useParams();

    useEffect(() => {
        getItems(categoryId)
            .then((data) => {
                setItems(data);
                setLoading(false);
            })
            .catch((e) => {
                console.log(e);
                setLoading(false);
            })
    }, [categoryId]);

    return (
        <Fragment>
            {loading === true ? (
                <p>Cargando</p>
            ) : (
                <Fragment>
                    {items.length === 0 ? (
                        <p>No se encontraron items</p>
                    ) : (
                        <div>
                            {items.map(item => {
                                return <Item key={item.id} item={item}/>;
                            })}
                        </div>
                    )}
                </Fragment>
            )}
        </Fragment>
    );
};

export default ItemList;
