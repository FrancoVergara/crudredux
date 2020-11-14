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
        default:
            return state;
    }
}