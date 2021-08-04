import {Fragment} from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = ({ greeting }) => {
    return (
        <Fragment>
            <p>{greeting}</p>
            <ItemCount stock={5} initial={2} onAdd={(counter) => console.log(counter)} />
        </Fragment>
    );
};

export default ItemListContainer;
