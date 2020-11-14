import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR
} from '../types';
import clientAxios from '../config/axios';
import Swal from 'sweetalert2'

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