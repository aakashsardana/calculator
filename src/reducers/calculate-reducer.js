export function calculateReducer(prevState, action) {
    const {value: inputValue} = prevState;
    switch(action.type) {
        case 'CLEAR_ALL': {
            return {value: "", error: null, bracket: null}
        }
        case 'CLEAR_RECENT': {
            const newValue = inputValue.slice(0, inputValue.length - 1);
            return {value: newValue, error: null, bracket: null}
        }
        case 'SET': {
            const newValue = inputValue + action.selectedVal;
            return { value: newValue, error: null, bracket: prevState.bracket }
        }
        case 'SET_BRACKET': {
            const newBracket = prevState.bracket === '(' ? ')' : '('
            const newValue = inputValue + newBracket;
            return { value: newValue, error: null, bracket: newBracket }
        }
        case 'CALCULATE': {
            let result;
            try {
                result = eval(inputValue);
                return {value: result, error: null}
            } catch(e) {
                return {value: inputValue, error: "Bad expression"}
            }
        }
        default:
            throw new Error(`${action.type} is not supported`)

    }
}