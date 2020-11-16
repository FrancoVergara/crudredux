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
} from '../types';
import clientAxios from '../config/axios';
import Swal from 'sweetalert2';

export function createNewProductAction(product){
    return async (dispatch) => {
        dispatch( addProduct() )

        try {
            // Agrega producto a API
            await clientAxios.post('/products', product)

            // Si todo sale bien, actualiza state
            dispatch( addProductSuccess(product) )

            // Success alert
            Swal.fire(
                'Correcto',
                'El producto se agrego correctamente',
                'success'
            );
        } catch (error) {
            // Si algo sale mal, actualiza state
            dispatch( addProductError() )

            // Error alert
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Hubo un error, intenta de nuevo'
            })
        }
    }
}

const addProduct = () => ({
    type: ADD_PRODUCT
})

const addProductSuccess = product => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product
})

const addProductError = () => ({
    type: ADD_PRODUCT_ERROR
})

export function getProductsAction(){
    return async (dispatch) => {
        dispatch( downloadProducts() )

        try {
            const response = await clientAxios.get('/products')
            dispatch( downloadProductsSuccess(response.data) )
    
        } catch (error) {
            dispatch( downloadProductsError() )
        }
    }
}

const downloadProducts = () => ({
    type: DOWNLOAD_PRODUCTS
})

const downloadProductsSuccess = products => ({
    type: DOWNLOAD_PRODUCTS_SUCCESS,
    payload: products
})

const downloadProductsError = () => ({
    type: DOWNLOAD_PRODUCTS_ERROR
})

export function deleteProductAction(id) {
    return async (dispatch) => {
        dispatch( getProductToDelete(id) )

        try {
            await clientAxios.delete(`/products/${id}`)
            dispatch( productDeleteSuccess() )
            Swal.fire(
                'Eliminado!',
                'Su producto ha sido eliminado',
                'success'
            )

        } catch (error) {
            dispatch( productDeleteError() )
        }
    }
}

const getProductToDelete = id => ({
    type: GET_PRODUCT_TO_DELETE,
    payload: id
})

const productDeleteSuccess = () => ({
    type: PRODUCT_DELETE_SUCCESS
})

const productDeleteError = () => ({
    type: PRODUCT_DELETE_ERROR
})