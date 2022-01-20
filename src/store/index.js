import { createStore } from 'redux'

const INITIAL_STATE = {
    data: ['test']
}

//REDUCER
function tasklist(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                data: [
                    ...state.data,
                    action.payload
                ]
            }
            
        default:
            return state
    }
}

const store = createStore(tasklist)

export default store