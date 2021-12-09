import React from 'react'
import { CartWidget } from './CartWidget'
// import {Link} from 'react-router-dom';


export const NavBar = () => {

    return (
        <div className="nav-bar" >

            <div className="title-container" >
                <img src="./Icons/copitas.png" alt="logo" />
                <h1 className="title" >
                    E-DRINK
                </h1>
            </div>
            <div className="menu-container" >
                <div>
                    <h3 className="menu-container-link">Home</h3>
                </div>
                <div>
                    <h3 className="menu-container-link">Cervezas</h3>
                </div>
                <div>
                    <h3 className="menu-container-link">Vinos</h3>
                </div>
                <div>
                    <h3 className="menu-container-link">Espumantes</h3>
                </div>
                <div>
                    <h3 className="menu-container-link">Destilados</h3>
                </div>
                <div>
                    <h3 className="menu-container-link">Combos</h3>
                </div>
                <div>
                    <h3 className="menu-container-link">Snacks y otros</h3>
                </div>
            </div>
            <div className="cart-container">
                <CartWidget />
            </div>
        </div>
    )
}
