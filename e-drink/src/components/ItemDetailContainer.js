import React, { useEffect, useState } from 'react'
import { ItemDetail } from './ItemDetail'

export const ItemDetailContainer = (props) => {

    const getItem = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(props,2000)
        })
    })

    const [itemDescription, setItemDescription] = useState(null)

    getItem.then((data) => {
        setItemDescription(data)
    })
    // useEffect(() => {
    // }, [])

    // console.log(itemDescription)

    return (
        <div>
            {
                itemDescription && (
                    <ItemDetail description={itemDescription}/>
                )
            }
        </div>
    )
}
