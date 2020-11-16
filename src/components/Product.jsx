import React from 'react';
import { useHistory } from 'react-router-dom';

// Redux
import { useDispatch } from 'react-redux';
import { deleteProductAction, getProductEditAction } from '../actions/productsAction'
import Swal from 'sweetalert2';

const Product = ({product}) => {

    const { name, price, id } = product

    const dispatch = useDispatch()
    const history = useHistory()

    const getIdProduct = id => {
        Swal.fire({
            title: 'Estas seguro?',
            text: 'No podras recuperar el producto!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si, eliminalo!',
            cancelButtonText: 'No, espera'
        }).then((result) => {
            if (result.value) {
              dispatch( deleteProductAction(id) )
            }
        })
    }

    const reDirect = id => {
        dispatch( getProductEditAction(product) )
        history.push(`/products/edit/${id}`)
    }

    return (
        <tr>
            <td>{name}</td>
            <td><span className="font-weight-bold">$ {price}</span></td>
            <td className="acciones">
                <button
                    type="button"
                    onClick={ e => reDirect(id) }
                    className="btn btn-primary mr-2"
                >Editar</button>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={e => getIdProduct(id)}
                >Eliminar</button>
            </td>
        </tr>
    );
}
 
export default Product;