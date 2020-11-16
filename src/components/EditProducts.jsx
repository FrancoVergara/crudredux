import React, { useState, useEffect } from 'react';
import { editProductAction } from '../actions/productsAction'
import { useHistory } from 'react-router-dom'

// Redux
import { useDispatch, useSelector } from 'react-redux'

const EditProducts = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    const [ product, saveProduct ] = useState({
        name: '',
        price: ''
    })

    const productedit = useSelector( state => state.products.editproduct )

    // Llenar el state automaticamente
    useEffect( () => {
        saveProduct( productedit )
    }, [productedit])

    const onChangeForm = e => {
        saveProduct({
            ...product,
            [e.target.name] : e.target.value
        })
    }

    const { name, price } = product

    const onSubmit = e => {
        e.preventDefault()

        dispatch( editProductAction(product) )
        history.push('/')
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Editar Producto
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
                                    onChange={onChangeForm}
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
                                    onChange={onChangeForm}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >Guardar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default EditProducts;