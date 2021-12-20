import React, { useEffect } from 'react'
import { CartWidget } from './CartWidget'
import { Link, NavLink, useLocation } from 'react-router-dom';


export const NavBar = () => {

    const path = useLocation()

    return (
        <div className="nav-bar" >
            <NavLink to='/' className='link'>
                <div className="title-container" >
                    <img src="../Icons/copitas.png" alt="logo" height='60' />
                    <h1 className="title" >
                        E-DRINK
                    </h1>
                </div>
            </NavLink>
            <div className="menu-container" >
                <div>
                    <NavLink to='/' className='link' >
                        <h3 className="menu-container-link" style={path.pathname === '/' ? { color: '#ed662b' } : {}}>Home</h3>
                    </NavLink>
                </div>
                <div>
                    <NavLink to='category/cervezas' className='link' >
                        <h3 className="menu-container-link" style={path.pathname === '/category/cervezas' ? { color: '#ed662b' } : {}}>Cervezas</h3>
                    </NavLink>
                </div>
                <div>
                    <NavLink to='category/vinos' className='link' >
                        <h3 className="menu-container-link" style={path.pathname === '/category/vinos' ? { color: '#ed662b' } : {}}>Vinos</h3>
                    </NavLink>
                </div>
                <div>
                    <NavLink to='category/espumantes' className='link' >
                        <h3 className="menu-container-link" style={path.pathname === '/category/espumantes' ? { color: '#ed662b' } : {}}>Espumantes</h3>
                    </NavLink>
                </div>
                <div>
                    <NavLink to='category/destilados' className='link' >
                        <h3 className="menu-container-link" style={path.pathname === '/category/destilados' ? { color: '#ed662b' } : {}}>Destilados</h3>
                    </NavLink>
                </div>
                <div>
                    <NavLink to='category/combos' className='link' >
                        <h3 className="menu-container-link" style={path.pathname === '/category/combos' ? { color: '#ed662b' } : {}}>Combos</h3>
                    </NavLink>
                </div>
            </div>
            <div className="cart-container">
                <CartWidget />
            </div>
        </div>
    )
}
