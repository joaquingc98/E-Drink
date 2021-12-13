import React, { useState } from 'react'
import { Item } from './Item'
import * as products from  './producs.json' 

export const ItemList = () => {

const [productList, setProductList] = useState(null)

const productListPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(products,2000)
    })
})
productListPromise.then((res) => {setProductList(res.default)})

    return (
        <div className="item-list">
            {
               productList && productList.data.map( (data) => 
                    (
                        <Item 
                            key={data.id}
                            title={data.title}
                            pictureURL={data.picture_URL}
                            price={data.price}
                         />
                    )
                )
            }
        </div>
    )
}
