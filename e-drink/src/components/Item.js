import { Button } from '@mui/material'
import React from 'react'


export const Item = (props) => {
    return (
        <div className="item-container">
            <img className="item-image" src={props.pictureURL} />
            <h1>{props.title}</h1>
            <h2>{`$${props.price}`}</h2>
            <div className="item-button-container">
                <Button variant="outlined">
                    <img src="../Icons/cart_icon.png" height="20" className="mr-1"/>
                    Comprar
                </Button>
            </div>
        </div>
    )
}
