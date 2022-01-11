import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ItemCount } from './ItemCount'
import { Button } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom'
import CartContext from '../context/CartContext'



export const ItemDetail = (props) => {


    const [itemDescription, setItemDescription] = useState(props.item)

    let navigate = useNavigate();

    const goToPreviousPath = () => {
        navigate(-1)
    }

    const [amount, setAmount] = useState(0)

    const selectedAmount = (value) => {
        setAmount(value)
    }

    //Chequea que haya items en el cart para renderizar boton de finalizar compra
    const context = useContext(CartContext)

    const [cartContent, setCartContent] = useState(context.cartArray)

    useEffect(() => {
        setCartContent(context.cartArray)
    }, [context.cartArray])




    return (
        <>
            {itemDescription && (
                <div className='detail-container'>
                    <div className='item-detail'>
                        <div className='item-detail-image'>
                            <img src={itemDescription.picture_URL}></img>
                        </div>
                        <div className='item-detail-info'>
                            <h1>{itemDescription.title}</h1>
                            <h2>${itemDescription.price}</h2>
                            <ItemCount item={itemDescription} onChange={selectedAmount} />
                            <p>Marca: {itemDescription.brand}</p>
                            <p>Pais: {itemDescription.country}</p>
                            <p className='total-price'>Total: ${itemDescription.price * amount}</p>
                            <p className='stock-disponible'><b>{itemDescription.stock - amount} unidades disponibles</b></p>
                        </div>
                    </div>
                    <div className='detail-buttons'>
                        <Button variant='contained' onClick={goToPreviousPath} className='return-button'>
                            <img src='../Icons/return-icon.png'></img>
                            Volver
                        </Button>
                        {cartContent.length != 0 ?
                            <NavLink to='/cart' className='link'>
                                <Button variant='contained' color='success' className='return-button'>
                                    <ShoppingCartIcon fontSize="medium" className='mr-1' />
                                    Finalizar
                                </Button>
                            </NavLink>
                            :
                            <></>
                        }
                    </div>
                </div>
            )
            }
        </>
    )
}
