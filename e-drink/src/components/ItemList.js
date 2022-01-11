import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Item } from './Item'
import { collection, getDocs, getFirestore } from 'firebase/firestore'

export const ItemList = (props) => {

    const [products, setProducts] = useState(null)

    useEffect(() => {
        const db = getFirestore();

        const itemsCollection = collection(db, "items");

        getDocs(itemsCollection)
            .then((snapshot) => {
                setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))                
            })
        }, [])
        console.log(products)

    return (
        <div className="item-list">
            {
                props.data && props.data.map((data) =>
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
    )
}
