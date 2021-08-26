import {Fragment} from "react";
import {useParams} from "react-router-dom";
import {useCartContext} from "../context/CartContext";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
    const {categoryId} = useParams();
    const {categories, getCategory} = useCartContext();

    return (
        <Fragment>
            {typeof categoryId !== "undefined" ? (
                <h1>{categories.length > 0 ? getCategory(categoryId).name : "Cargando..."}</h1>
            ) : (
                <h1>Home</h1>
            )}
            <p>{greeting}</p>
            <ItemList />
        </Fragment>
    );
};

export default ItemListContainer;
