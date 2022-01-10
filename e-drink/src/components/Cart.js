import { Button } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import CartContext from '../context/CartContext'
import { DenseTable } from './Table'

export const Cart = () => {

    const context = useContext(CartContext)

    const [totalPrice, setTotalPrice] = useState(0)

    const [totalProducts, setTotalProducts] = useState(0)


    useEffect(() => {
        // CALCULO DE PRECIO TOTAL
        let priceArray = []

        context.cartArray.map(data => { priceArray = [...priceArray, data.total_price] })

        if (priceArray.length > 0) {
            setTotalPrice(priceArray.reduce((a, b) => (a + b)))
        }
        //CALCULO DE CANTIDAD TOTAL
        let amountArray = []

        context.cartArray.map(data => { amountArray = [...amountArray, data.amount] })

        if (amountArray.length > 0) {
            setTotalProducts(amountArray.reduce((a, b) => (a + b)))
        }
        


    }, [context.cartArray])

    return (
        <div>
            {
                context.cartArray.length > 0 ?
                    <div className='cart-container'>
                        <div className='cart-title-container'>
                            <h1 className='cart-title'>Bienvenido a tu carrito!</h1>
                        </div>
                        <div className='cart-data-container'>
                            <div className='cart-table-container'>
                                <DenseTable/>
                            </div>
                            <div className='cart-price-container'>
                                <h1>Total del pedido</h1>
                                <hr />
                                <h3>Unidades Totales: {totalProducts}(u)</h3>
                                <h2>Total: ${totalPrice}</h2>
                                <hr />
                                <Button variant='contained' color='warning' className='return-button'>
                                    <b>Pagar Ahora</b>
                                </Button>
                            </div>
                        </div>
                        <div className='cart-buttons-container'>
                            <NavLink to="/" className='link'>
                                <Button variant='contained' className='cart-return-button'>
                                    <img src='../Icons/return-icon.png'></img>
                                    Seguir Comprando
                                </Button>
                            </NavLink>
                            <Button variant='contained' color='success' className='cart-pay-button'>
                                Pagar Ahora
                                <img src='../Icons/return-icon.png'></img>
                            </Button>
                        </div>

                    </div>
                    :
                    <div className='cart-no-items-container'>
                        <img src='./Icons/notFound_icon.png'/>
                    <h1>
                        ¡No se han encontrado items en el carrito!
                    </h1>
                    </div>
            }
        </div>
    )
}
