import React, { Fragment, useEffect } from 'react';
import Product from './Product';

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

    // Obtener state
    const products = useSelector( state => state.products.products )
    const error = useSelector( state => state.products.error )
    const loading = useSelector( state => state.products.loading )

    return (
        <Fragment>
            <h2 className="text-center my-5">Listado de Productos</h2>

            { error ? <p className="alert alert-danger text-center mt-4 font-weight-bold">Hubo un error</p> : null }

            { loading ? <p className="text-center">Cargando...</p> : null }

            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Producto</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Accion</th>
                    </tr>
                </thead>

                <tbody>
                    { products.length === 0 ? 'No hay productos' : (
                        products.data.map( product => (
                            <Product
                                key={product.id}
                                product={product}
                            />
                        ))
                    )}
                </tbody>
            </table>
        </Fragment>
    );
}
 
export default Products;