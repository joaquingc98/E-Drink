import React, { useState } from 'react'
import CartContext from '../context/CartContext'


export const CustomContext = ({children}) => {

    const [cartArray, setCartArray] = useState([])

    const isInCart = (id) => {
        if(cartArray.some(e => e.ID === id)){
            return(true)
        }else{
            return(false)
        }
    }

    const addItem = (item, title, quantity, price, picture) => {
        if(!isInCart(item)){
            setCartArray([...cartArray,{
                ID: item,
                title: title,
                amount: quantity,
                total_price: price * quantity,
                picture_URL: picture
            }])
        }else{
            let duplicateIndex = cartArray.findIndex(e => e.ID === item)
            cartArray[duplicateIndex].amount = cartArray[duplicateIndex].amount + quantity
        }
        
    }

    const removeItem = (itemID) => {
        let index = cartArray.findIndex(e => e.ID === itemID)
        if(index !== -1){
            setCartArray(cartArray.filter(item => item.ID != itemID ))
        }
    }

    const clear = () => {
        setCartArray([])
    }

    return (
        <CartContext.Provider value={{addItem, removeItem, clear, cartArray}}>
            {children}
        </CartContext.Provider>
    )
}
