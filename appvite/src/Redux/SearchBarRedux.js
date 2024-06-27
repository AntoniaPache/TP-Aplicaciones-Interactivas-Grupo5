const SET_SEARCH_TERM = 'SET_SEARCH_TERM';

export const setSearchTerm = (term) => ({
    type: SET_SEARCH_TERM,
    payload: term
});

const initialState = {
    searchTerm: ''
};

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_TERM:
            return {
                ...state,
                searchTerm: action.payload
            };
        default:
            return state;
    }
};