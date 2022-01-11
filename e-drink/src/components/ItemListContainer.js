import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemList } from './ItemList'

import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'



export const ItemListContainer = () => {
    const params = useParams()
    console.log(params.id)

    const [productList, setProductList] = useState(null)
    const [loader, setLoader] = useState(true)

    useEffect(() => {

        const db = getFirestore();
        setLoader(true)

        const itemsCollection = collection(db, "items");
        
        if(params.id){
            const q = query(collection(db,"items"), where("type", "==", params.id))
            getDocs(q)
            .then((snapshot) => {
                setProductList(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            setLoader(false)
            })
        }else{
            getDocs(itemsCollection)
            .then((snapshot) => {
                setProductList(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            setLoader(false)

            })
        }

    }, [params.id])


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
