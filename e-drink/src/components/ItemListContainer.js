import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemList } from './ItemList'
import * as products from './producs.json'




export const ItemListContainer = () => {
    const { id } = useParams()

    const [productList, setProductList] = useState(null)
    const [loader, setLoader] = useState(true)


    useEffect(() => {
        setLoader(true)
        const productListPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products)
                setLoader(false)
            }, 2000)
        })
        productListPromise.then((res) => { setProductList(id ? res.default.data.filter((data) => data.type === id) : res.default.data) })
    }, [id])


    return (
        <div className="list-container">
            {
                loader ? 
                <img className='item-loader' src='../Icons/drink-loader.gif'></img>
                :
                <ItemList className="ml-1" data={productList} />
            }
        </div>
    )
}
