import { useState } from "react";
import PropTypes from "prop-types";

const Counter = ({ value }) => {
    const h1 = "text-center mt-3 green display-1";
    const h2 = "text-center blue display-2";
    const btn = "btn btn-primary";
    const resetBtn = `${btn} mx-2`;

    const [counter, setCounter] = useState(value);

    const handleIncrement = () => {
        // setCounter( c => c + 10 );
        setCounter(counter + 10);
    };

    const handleReset = () => setCounter(value);

    const handleDecrement = () => {
        (counter > 0) && setCounter(counter - 10);
    };

    return (
        <>
            <h1 className={ h1 }>Counter App</h1>
            <hr />
            <h2 id="counter" className={ h2 }>{ counter }</h2>
            <section className="text-center mt-3">
                <button id="increment" onClick={ handleIncrement } className={ btn }>+</button>
                <button id="reset" onClick={ handleReset }     className={ resetBtn }>reset</button>
                <button id="decrement" onClick={ handleDecrement } className={ btn }>-</button>
            </section>
        </>
    );
};

export default Counter;

Counter.defaultProps = {
    value: 0
};

Counter.propTypes = {
    value: PropTypes.number.isRequired
};