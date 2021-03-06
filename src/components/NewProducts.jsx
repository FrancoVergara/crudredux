import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions de redux
import { createNewProductAction } from '../actions/productsAction';
import { showAlertAction, hideAlertAction } from '../actions/alertAction';

const NewProducts = ({history}) => {

    const [ name, saveName ] = useState('')
    const [ price, savePrice ] = useState(0)

    // Acceder al state del store
    const loading = useSelector( state => state.products.loading )
    const error = useSelector( state => state.products.error )
    const alert = useSelector( state => state.alert.alert )

    // Utilizar useDispatch y te crea una funcion
    const dispatch = useDispatch();

    // Mandar a llamar el action
    const addProduct = product => dispatch( createNewProductAction(product) )

    const onSubmit = e => {
        e.preventDefault()

        // Validar el formulario
        if(name.trim() === '' || price <= 0){
            
            const alert = {
                msg: 'Todos los campos son obligatorios',
                classes: 'alert alert-danger text-uppercase text-center p3'
            }
            dispatch( showAlertAction(alert) )

            return;
        }

        // Ver si no hay errores
        dispatch( hideAlertAction() )

        // Crear el nuevo producto
        addProduct({
            name,
            price
        })

        // Redireccionar
        history.push('/')
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar Nuevo Producto
                        </h2>

                        { alert ? <p className={alert.classes}> {alert.msg} </p> : null }

                        <form
                            onSubmit={onSubmit}
                        >
                            <div className="form-group">
                                <label>Nombre Producto</label>
                                <input
                                    type="text"
                                    placeholder="Nombre Producto"
                                    className="form-control"
                                    name="name"
                                    value={name}
                                    onChange={e => saveName(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label>Precio Producto</label>
                                <input
                                    type="number"
                                    placeholder="Precio Producto"
                                    className="form-control"
                                    name="price"
                                    value={price}
                                    onChange={e => savePrice(e.target.value)}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >Agregar</button>
                        </form>

                        { loading ? <p>Cargando...</p> : null }
                        { error ? <p className="alert alert-danger p2 mt-4 text-center">Hubo un error</p> : null }
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default NewProducts;