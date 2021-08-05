import {Fragment} from "react";
import {NavLink} from "react-router-dom";

const Item = ({ item: { id, title, price, pictureUrl }}) => {
    return (
        <Fragment>
            <h2><NavLink to={`/item/${id}`}>{title}</NavLink></h2>
            <p>${price}</p>
            <img src={pictureUrl} alt={title} />
        </Fragment>
    );
};

export default Item;
