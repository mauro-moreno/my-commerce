import {Fragment, useState} from "react";
import "./ItemCount.css";

const ItemCount = ({stock, initial = 1, onAdd}) => {
    const [counter, setCounter] = useState(initial);

    const increment = () => {
        if (typeof stock === "undefined" || counter < stock) {
            setCounter(counter + 1);
        }
    };

    const decrement = () => {
        if (counter > initial) {
            setCounter(counter - 1);
        }
    };

    const add = () => {
        onAdd(counter);
    }

    return (
        <Fragment>
            <div className="counter-control-container">
                <button onClick={decrement}>-</button>
                <span>{counter}</span>
                <button onClick={increment}>+</button>
            </div>
            <div className="add-container">
                <button onClick={add}>Agregar</button>
            </div>
        </Fragment>
    )
};

export default ItemCount;