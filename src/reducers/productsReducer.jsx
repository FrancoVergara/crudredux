import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR
} from '../types'

// Cada reducer tiene su propio state
const initialState = {
    products: [],
    error: null,
    loading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                loading: true
            }

        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                product: [...state.products, action.payload]
            }

        default:
            return state;
    }
}