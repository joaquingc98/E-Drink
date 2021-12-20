import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as products from './producs.json'
import { ItemCount } from './ItemCount'
import { Button } from '@mui/material'

export const ItemDetail = () => {

    const { id } = useParams()
    const [itemDescription, setItemDescription] = useState(null)

    const [loader, setLoader] = useState(true)

    useEffect(() => {
        const getItem = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products)
                setLoader(false)
            }, 2000)
        })
        getItem.then((res) => {
            setItemDescription(res.default.data.filter((data) => data.id === id)[0])
        })
    }, [])

    let navigate = useNavigate();

    const goToPreviousPath = () => {
        navigate(-1)
    }

    return (
        <>
            {
                loader ?
                    <img className='detail-loader' src='../Icons/drink-loader.gif'></img>
                    
                    :

                    itemDescription && (
                        <div className='detail-container'>
                            <div className='item-detail'>
                                <div className='item-detail-image'>
                                    <img src={itemDescription.picture_URL}></img>
                                </div>
                                <div className='item-detail-info'>
                                    <h1>{itemDescription.title}</h1>
                                    <h2>{`$${itemDescription.price}`}</h2>
                                    <ItemCount stock={itemDescription.stock} />
                                    <p>Marca: {itemDescription.brand}</p>
                                    <p>Pais: {itemDescription.country}</p>
                                    <p className='stock-disponible'><b>{itemDescription.stock} unidades disponibles</b></p>
                                </div>
                            </div>

                            <Button variant='contained' onClick={goToPreviousPath} className='return-button'>
                                <img src='../Icons/return-icon.png'></img>
                                Volver
                            </Button>
                        </div>
                    )
            }
        </>
    )
}
