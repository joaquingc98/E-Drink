import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import Swal from 'sweetalert2'
import { NavLink } from 'react-router-dom'


export const ItemCount = ({ stock, onChange }) => {

    let [counter, setCounter] = useState(0)
    const [disableButton, setDisableButton] = useState(true)

    useEffect(() => {
        if (counter === 0) {
            setDisableButton(true)
        } else {
            setDisableButton(false)
        }
        onChange(counter)
    }, [counter])

    const handlePlus = () => {
        if (counter < stock) {
            setCounter(counter + 1)
        }
    }

    const handleMinus = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }

    const handleAdd = () => {
        Swal.fire({
            icon: 'success',
            title: 'A beber!',
            text: `Se agregaron ${counter} elementos al carrito`,
        })
        setCounter(0)
    }



    return (
        <>
            <div className="item-counter-container">
                <input type="image" src="../Icons/minusIcon.png" className="counter-button" onClick={handleMinus} />
                <p>{counter}</p>
                <input type="image" src="../Icons/plusIcon.png" className="counter-button" onClick={handlePlus} />
            </div>
            <div className="add-button-container">
                <NavLink to='/cart' className='link'>
                    <Button disabled={disableButton} className="add-button" variant="outlined" onClick={handleAdd}>Agregar al carrito!</Button>
                </NavLink>
            </div>
        </>
    )
}
