import {Fragment} from "react";

const Item = ({ item: { title, price, pictureUrl }}) => {
    return (
        <Fragment>
            <h2>{title}</h2>
            <p>${price}</p>
            <img src={pictureUrl} alt={title} />
        </Fragment>
    );
};

export default Item;
