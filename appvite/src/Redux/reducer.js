import { contador } from './actions';

const estadoCant = {
    count: 0
};

export const reducer = (state = estadoCant, contador) => { 
    switch (contador.type) { 
        case 'add_number':
            return {
                ...state,
                count: state.count + 1
            };
        case 'less_number':
            return {
                ...state,
                count: state.count - 1
            };
        default:
            return state;
    }
};

export default reducer;