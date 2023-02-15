import {
    COUNTER
} from '../types';

const CounterReducer = (state = 0, action) => {
    switch (action.type) {
        case COUNTER: {
            return state = action.payload
        }
        default: {
            return state;
        }
    }
}
export default CounterReducer

export { CounterReducer }