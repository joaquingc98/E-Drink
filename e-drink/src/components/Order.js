import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../context/CartContext'
import { addDoc, collection, doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore'
import { Button } from '@mui/material'
import TextField from '@mui/material/TextField';
import { DenseTable } from './Table';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';






export const Order = () => {

    const context = useContext(CartContext)

    const [totalPrice, setTotalPrice] = useState(0)

    const [orderData, setOrderData] = useState(null)

    const [loader, setLoader] = useState(false)

    const db = getFirestore()

    const navigate = useNavigate()


    useEffect(() => {
        // CALCULO DE PRECIO TOTAL
        let priceArray = []

        context.cartArray.map(data => { priceArray = [...priceArray, data.total_price] })

        if (priceArray.length > 0) {
            setTotalPrice(priceArray.reduce((a, b) => (a + b)))
        } else {
            setTotalPrice(0)
        }


    }, [context.cartArray])


    const handleOrder = (e) => {

        e.preventDefault()
        setLoader(true)

        // FECHA DEL PEDIDO
        const date = new Date().toLocaleString() + "";

        // ORDEN DEL CLIENTE
        const order = {
            buyer: { name: e.target[0].value, email: e.target[2].value, phone: e.target[4].value, address: e.target[6].value },
            items: context.cartArray.map(data => ({ id: data.ID, title: data.title, amount: data.amount, price: data.total_price })),
            date: date,
            total: totalPrice
        }
        // BASE DE DATOS PARA CARGAR LA ORDEN
        const data = collection(db, "orders")

        // CARGA DE ORDEN Y CAPTURA DE ID
        addDoc(data, order).then((res) => {
            const orderDoc = doc(db, "orders", res.id);
            getDoc(orderDoc).then((snapshot) => {
                setOrderData(snapshot.data());
            })

            Swal.fire({
                icon: 'success',
                title: 'Tu orden ha sido cargada!',
                text: `La recibiras a tu domicilio dentro de las proximas 24hs`,
                footer: `ID de compra: ${res.id}`
            });

        })


    }

    // ACTUALIZACION DE STOCK
    useEffect(() => {
        console.log(orderData)
        if (orderData) {
            for (let i = 0; i < orderData.items.length; i++) {
                let data = doc(db, "items", orderData.items[i].id)

                getDoc(data).then((snapshot) => {
                    updateDoc(data, { stock: snapshot.data().stock - orderData.items[i].amount });
                    context.clear()
                    navigate('/');
                })
            }
        }

    }, [orderData])


    return (
        <div className='order-data-container'>
            {
                loader ?
                    <img className='detail-loader' src='../Icons/drink-loader.gif'></img>
                    :
                    <>

                        <form onSubmit={handleOrder} className='order-form'>
                            <TextField
                                id="standard-textarea"
                                label="Nombre y Apellido"
                                placeholder="Juan Cruz Ramirez"
                                multiline
                                variant="standard"
                                className="text-field"
                                required

                            />
                            <TextField
                                id="standard-textarea"
                                label="Email"
                                placeholder="jcramirez@gmail.com"
                                multiline
                                variant="standard"
                                className="text-field"
                                required
                            />
                            <TextField
                                id="standard-textarea"
                                label="Telefono"
                                placeholder="01112321549"
                                multiline
                                variant="standard"
                                className="text-field"
                                required
                            />
                            <TextField
                                id="standard-textarea"
                                label="Direccion"
                                placeholder="Chubut 9670"
                                multiline
                                variant="standard"
                                className="text-field"
                                required

                            />
                            <Button type='submit' variant='contained' color='success' className='cart-pay-button'>
                                {/* <NavLink to="/" className='link'> */}
                                confirmar orden
                                <img src='../Icons/return-icon.png'></img>
                                {/* </NavLink> */}
                            </Button>
                        </form>
                        <div className='order-small-table'>
                            <DenseTable />
                            <h1 className='order-total'>TOTAL A PAGAR: ${totalPrice}</h1>
                        </div>
                    </>
            }
        </div>
    )
}
