
export const monumentReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_MONUMENT':
            return action.payload
        case 'CLEAR_MONUMENT':
            return action.payload
        default:
            return state
    }
}