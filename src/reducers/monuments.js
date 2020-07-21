export const monumentsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_MONUMENT':
            return [...action.payload]
        case 'UPDATE_MONUMENT':
            return [...action.payload]
        case 'DELETE_MONUMENT':
            return [...action.payload]
        default:
            return state
    }
}