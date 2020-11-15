import React, { Fragment, useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { getProductsAction } from '../actions/productsAction';

const Products = () => {

    const dispatch = useDispatch();

    useEffect(() => {

        // Consultar la API
        const loadProducts = () => dispatch( getProductsAction() )
        loadProducts()

    }, [])

    return (
        <Fragment>
            <h2 className="text-center my-5">Listado de Productos</h2>

            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Producto</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Accion</th>
                    </tr>
                </thead>

                <tbody></tbody>
            </table>
        </Fragment>
    );
}
 
export default Products;