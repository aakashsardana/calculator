function CalculatorDisplay({value, error}) {
    return (
        <div className="calculator__display-container">
            <input value={value} type="text" className="calculator__display" disabled />
            {error ? <div className="error">Bad Expression</div> : null}
        </div>
    )
}

export default CalculatorDisplay