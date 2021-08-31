import {NavLink} from "react-router-dom";
import "./Item.css";

const Item = ({ item: { id, title, price, pictureUrl }}) => {
    return (
        <div className="item">
            <NavLink to={`/item/${id}`}><img src={pictureUrl} alt={title} /></NavLink>
            <h2><NavLink to={`/item/${id}`}>{title}</NavLink></h2>
            <p>${price}</p>
        </div>
    );
};

export default Item;
