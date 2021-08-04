import {Fragment} from "react";

const Item = ({ item: { title, description, price, pictureUrl }}) => {
    return (
        <Fragment>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>${price}</p>
            <img src={pictureUrl} alt={title} />
        </Fragment>
    );
};

export default Item;
