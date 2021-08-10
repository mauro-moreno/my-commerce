import {Fragment} from "react";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
    return (
        <Fragment>
            <p>{greeting}</p>
            <ItemList />
        </Fragment>
    );
};

export default ItemListContainer;
