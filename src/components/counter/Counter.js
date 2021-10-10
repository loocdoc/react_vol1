import { useState } from "react";
import PropTypes from "prop-types";
import { Content } from "../layout";

export function Counter({ initialValue }) {
    const [count, setCount] = useState(initialValue);

    const addNumber = () => {
        setCount(count + 1);
    };

    const resetNumber = () => {
        setCount(0);
    };

    const subtractNumber = () => {
        setCount(count - 1);
    };

    const handleClick = (value) => {
        setCount(count + value);
    };

    return (
        <div className="column columns is-flex-direction-column">
            <div className="column">
                <h2 className="is-size-3">Counter - {count}</h2>
            </div>
            <div className="column">
                <button className="button is-primary" onClick={addNumber}>+</button>
                <button className="button is-grey mx-2" onClick={resetNumber}>0</button>
                <button className="button is-danger" onClick={subtractNumber}>-</button>
            </div>
            <div className="column">
                <button className="button is-link" onClick={() => handleClick(5)}>5</button>
                <button className="button is-warning mx-2" onClick={resetNumber}>0</button>
                <button className="button is-info" onClick={() => handleClick(-5)}>-5</button>
            </div>
        </div>
    )
}

Counter.defaultProps = {
    initialValue: 0,
};

Counter.propTypes = {
    initialValue: PropTypes.number.isRequired
};