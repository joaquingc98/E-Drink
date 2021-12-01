import React from 'react'
// import {Link} from 'react-router-dom';


export const NavBar = () => {

    const navStyle = {
        backgroundColor: "#121a34",
        height: "60px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        boxShadow: "10px #888888"
    }

    const menuStyle = {
        display: "flex",
        flexDirection: "row",
        color: "rgb(233 231 231)",
        marginRight:"20px"
    }
    const titleContainerStyle = {
        display: "flex",
        flexDirection: "row",
        marginLeft: "20px"
    }

    const titleStyle = {
        color: "#ed662b",
        marginTop:"5px",
        marginLeft:"20px"
    }

    const menuLinkStyle ={
        marginLeft:"20px",
        marginTop: "15px"
    }

    return (
        <div className="nav-bar" style={navStyle}>
            
            <div className="title-container" style = {titleContainerStyle}>
                <img src = "./Icons/copitas.png" alt = "logo"/>
                <h1 className="title"  style={titleStyle}>
                    E-DRINK
                </h1>
            </div>
            <div className="menu-container" style={menuStyle}>
                <div className="menu-container-link">
                    <h3 style={menuLinkStyle}>Home</h3>
                </div>
                <div className="menu-container-link">
                    <h3 style={menuLinkStyle}>Cervezas</h3>
                </div>
                <div className="menu-container-link">
                    <h3 style={menuLinkStyle}>Vinos</h3>
                </div>
                <div className="menu-container-link">
                    <h3 style={menuLinkStyle}>Espumantes</h3>
                </div>
                <div className="menu-container-link">
                    <h3 style={menuLinkStyle}>Destilados</h3>
                </div>
                <div className="menu-container-link">
                    <h3 style={menuLinkStyle}>Combos</h3>
                </div>
                <div className="menu-container-link">
                    <h3 style={menuLinkStyle}>Snacks y otros</h3>
                </div>
            </div>
        </div>
    )
}
