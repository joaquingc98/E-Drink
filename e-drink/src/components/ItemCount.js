import React, { useState } from 'react'
import { Button } from '@mui/material'
import Swal from 'sweetalert2'


export const ItemCount = (props) => {

    let [counter, setCounter] = useState(1)

    const handlePlus = () => {
        if (counter < props.stock) {
            setCounter(counter + 1)
        }
    }

    const handleMinus = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }

    const handleAdd = () => {
        Swal.fire({
            icon: 'success',
            title: 'A beber!',
            text: `Se agregaron ${counter} elementos al carrito`,
          })
        setCounter(1)
    }

    return (
        <>
            <div className="item-counter-container">
                <input type="image" src="./Icons/minusIcon.png" className="counter-button" onClick={handleMinus} />
                <p>{counter}</p>
                <input type="image" src="./Icons/plusIcon.png" className="counter-button" onClick={handlePlus} />
            </div>
            <div className="add-button-container">
                <Button className="add-button" variant="outlined" onClick={handleAdd}>Agregar al carrito!</Button>
            </div>
        </>
    )
}
