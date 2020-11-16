import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    DOWNLOAD_PRODUCTS,
    DOWNLOAD_PRODUCTS_SUCCESS,
    DOWNLOAD_PRODUCTS_ERROR,
    GET_PRODUCT_TO_DELETE,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_DELETE_ERROR
} from '../types'

// Cada reducer tiene su propio state
const initialState = {
    products: [],
    error: null,
    loading: false,
    deleteProduct: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
        case DOWNLOAD_PRODUCTS:
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
        
        case DOWNLOAD_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                products: action.payload
            }

        case ADD_PRODUCT_ERROR:
        case DOWNLOAD_PRODUCTS_ERROR:
        case PRODUCT_DELETE_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            }

        case GET_PRODUCT_TO_DELETE:
            return {
                ...state,
                deleteProduct: action.payload
            }

        case PRODUCT_DELETE_SUCCESS:
            return {
                ...state,
                products: state.products.filter( product => product.id !== state.deleteProduct ),
                deleteProduct: null
            }

        default:
            return state;
    }
}