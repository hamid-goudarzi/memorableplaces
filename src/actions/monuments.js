import { clearMonument } from "./monument";

export const addMonument = (fullname, imageUrl, describe) => {
    //anonomeous function
    return async (dispatch, getState) => {
        const monuments = [...getState().monuments];
        const monument = {
            id: Math.floor(Math.random() * 1000),
            fullname,
            imageUrl,
            describe
        };

        if (monument.fullname !== '' && monument.fullname !== ' ') {
            monuments.push(monument);
            await dispatch({ type: 'ADD_MONUMENT', payload: monuments });
            await dispatch(clearMonument());
        }
    };
};

export const deleteMonument = (monumentid) => {
    return async (dispatch, getState) => {
        const monuments = [...getState().monuments]
        const filteredMonument = monuments.filter(e => e.id !== monumentid)
        await dispatch({ type: 'DELETE_MONUMENT', payload: filteredMonument })
    }
}