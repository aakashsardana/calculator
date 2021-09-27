function CalculatorKey({value, isOperator, children, onKeyClick}) {
    let buttonStyles = {};

    if(isOperator) {
        buttonStyles.color = 'orange';
    }
    const isEqual = value === '=';

    return <button style={buttonStyles} onClick={() => onKeyClick(value)} value={value} className={`calculator__key ${isEqual ? 'equal' : ''}`}>{children}</button>
}

export default CalculatorKey;