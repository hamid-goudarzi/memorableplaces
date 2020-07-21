
export const imageUrlReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_IMAGEURL':
            return action.payload
        case 'CLEAR_MONUMENT':
            return action.payload
        default:
            return state
    }
}