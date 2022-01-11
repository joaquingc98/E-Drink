import React, { useEffect, useState } from 'react'
import { ItemDetail } from './ItemDetail'
import { doc, getDoc, getFirestore } from "firebase/firestore"
import { useParams } from 'react-router-dom'



export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)

    const { id } = useParams()

    const [loader, setLoader] = useState(true)


    useEffect(() => {
        const db = getFirestore();

        const itemsRef = doc(db, "items", id);

        getDoc(itemsRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    setItem({ id: snapshot.id, ...snapshot.data() });
                }
                setLoader(false)
            })
    }, [])


    return (
        <>
            {
                loader ?
                    <img className='detail-loader' src='../Icons/drink-loader.gif'></img>

                    :
                    <div>
                        <ItemDetail item={item} />
                    </div>
            }
        </>
    )
}
