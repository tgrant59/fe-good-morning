import { fromJS } from 'immutable'

export const initialState = fromJS({})

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default loginReducer
