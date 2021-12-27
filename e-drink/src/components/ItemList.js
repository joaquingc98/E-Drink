import React from 'react'
import { NavLink } from 'react-router-dom'
import { Item } from './Item'

export const ItemList = (props) => {


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
