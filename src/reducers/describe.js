export const describeReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_DESCRIBE':
            return action.payload
        case 'CLEAR_MONUMENT':
            return action.payload
        default:
            return state
    }
}