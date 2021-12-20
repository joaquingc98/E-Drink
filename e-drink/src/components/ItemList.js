import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { Item } from './Item'
import * as products from './producs.json'

export const ItemList = () => {

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
        <>

            {
                loader ?
                    <img className='item-loader' src='../Icons/drink-loader.gif'></img>
                    :
                    <div className="item-list">
                        {
                            productList && productList.map((data) =>
                            (
                                <NavLink to={`../item/${data.id}`} className="item-link">
                                    <Item
                                        key={data.id}
                                        title={data.title}
                                        pictureURL={data.picture_URL}
                                        price={data.price}
                                        brand={data.brand}
                                        country={data.country}
                                        stock={data.stock}
                                    />
                                </NavLink>
                            )
                            )
                        }
                    </div>
            }
        </>
    )
}
