export const setMonument = (event) => {
    return async (dispatch) => {
        await dispatch({ type: 'SET_MONUMENT', payload: event.target.value });
    };
};
export const setImageUrl = (event) => {
    return async (dispatch) => {
        await dispatch({ type: 'SET_IMAGEURL', payload: event.target.value });
    };
};
export const setDescribe = (event) => {
    return async (dispatch) => {
        await dispatch({ type: 'SET_DESCRIBE', payload: event.target.value });
    };
};

export const clearMonument = () => {
    return async (dispatch) => {
        await dispatch({ type: 'CLEAR_MONUMENT', payload: '' });
    };
};