import React from 'react'
import { ItemCount } from './ItemCount'

export const ItemDetail = (props) => {
    return (
        <div>
            <ItemCount stock={props.description.stock}/>
            <p>Marca: {props.description.brand}</p>
            <p>Pais: {props.description.country}</p>
            <p><b>Stock Disponible: {props.description.stock}</b></p>
        </div>
    )
}
