import {Fragment, useState} from "react";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
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
            <div className="mb2 clearfix">
                <div className="left mr2">
                    <button className="btn btn-outline" onClick={decrement}>-</button>
                    <span className="m2">{counter}</span>
                    <button className="btn btn-outline" onClick={increment}>+</button>
                </div>
                <div className="left">
                    <button className="btn btn-outline" onClick={add}>Agregar</button>
                </div>
            </div>
        </Fragment>
    )
};

export default ItemCount;