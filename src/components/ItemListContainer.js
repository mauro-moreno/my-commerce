import {Fragment} from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
    return (
        <Fragment>
            <p>{greeting}</p>
            <ItemCount stock={5} initial={2} onAdd={(counter) => console.log(counter)} />
            <ItemList />
        </Fragment>
    );
};

export default ItemListContainer;
