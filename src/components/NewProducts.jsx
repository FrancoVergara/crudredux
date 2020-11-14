import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions de redux
import { createNewProductAction } from '../actions/productsAction';

const NewProducts = () => {

    const [ name, saveName ] = useState('')
    const [ price, savePrice ] = useState(0)

    // Utilizar useDispatch y te crea una funcion
    const dispatch = useDispatch();

    // Mandar a llamar el action
    const addProduct = product => dispatch( createNewProductAction(product) )

    const onSubmit = e => {
        e.preventDefault()

        // Validar el formulario
        if(name.trim() === '' || price === 0){
            return;
        }

        // Ver si no hay errores

        // Crear el nuevo producto
        addProduct({
            name,
            price
        })
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar Nuevo Producto
                        </h2>

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
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default NewProducts;