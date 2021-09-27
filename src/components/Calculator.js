import { useReducer } from "react";

import { data } from "../api/calculator";
import { calculateReducer } from "../reducers/calculate-reducer";

import BackSpace from "../icons/backspace";
import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorKey from "./CalculatorKey";

function Calculator() {
    const [state, dispatch] = useReducer(calculateReducer, {value: "", error: null})
    const {value: inputValue, error} = state;

    function keyClickHandler(value) {
        if(value === '=') {
            dispatch({type: "CALCULATE"});
        } else if(value === 'X') {
            if(inputValue.length) {
                dispatch({type: 'CLEAR_RECENT'});
            }
        } else if(value === 'AC') {
            dispatch({type: "CLEAR_ALL"});
        } else if(value === '()') {
            dispatch({type: 'SET_BRACKET'})
        } else {
            dispatch({type: "SET", selectedVal : value});
        }
    }

    function getCalculatorKey(calculatorKey) {
        const {key, type} = calculatorKey;
        let child = key;
        if(key === 'X') {
            child = <BackSpace width={16} height={16} />;
        }

        return (
            <CalculatorKey onKeyClick={keyClickHandler} isOperator={type === 'operator'} key={key} value={key}>
                {child}        
            </CalculatorKey>
        )
    }

    return (
        <div className="calculator">
            <CalculatorDisplay value={inputValue} error={error} />
            <div className="calculator-keys">
                {data.map((row, index) => {
                    return (
                        <div key={index} className="calculator__row">
                            {row.map((key) => {
                                return getCalculatorKey(key);
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Calculator;