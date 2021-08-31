import {Fragment} from "react";
import {useParams} from "react-router-dom";
import {useCategoriesContext} from "../context/CategoriesContext";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
    const {categoryId} = useParams();
    const {categories, getCategory} = useCategoriesContext();

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
