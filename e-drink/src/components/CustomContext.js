import React from 'react'
import CartContext from '../context/CartContext'

export const CustomContext = ({children}) => {

    let cartArray = []

    const isInCart = (id) => {
        if(cartArray.some(e => e.ID === id)){
            return(true)
        }else{
            return(false)
        }
    }

    const addItem = (item, quantity, price, picture) => {
      if(!isInCart(item)){
          cartArray.push({
             ID: item,
             amount: quantity,
             unit_price: price,
             picture_URL: picture
         })
         console.log(cartArray)
      }else{
        let duplicateIndex = cartArray.findIndex(e => e.ID === item)
        cartArray[duplicateIndex].amount = cartArray[duplicateIndex].amount + quantity
        console.log('DUPLICADO',cartArray)
      }

    }

    const removeItem = (itemID) => {
        let index = cartArray.findIndex(e => e.ID === itemID)
        if(index !== -1){
            cartArray.splice(index,1)
        }
        console.log(cartArray)
    }

    const clear = () => {
        cartArray = []
        console.log(cartArray)
    }


    return (
        <CartContext.Provider value={{addItem, removeItem, clear, cartArray}}>
            {children}
        </CartContext.Provider>
    )
}
