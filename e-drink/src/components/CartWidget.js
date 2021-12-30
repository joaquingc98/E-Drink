import React, { useContext, useEffect, useState } from 'react'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartContext from '../context/CartContext';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: 0,
        top: 10,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

const cartStyle = {
    color: "white",
    size: "50px",
    marginTop: "5px"
}


export const CartWidget = () => {

    const context = useContext(CartContext)

    const [cartAmount, setCartAmount] = useState(context.cartArray.length)

    useEffect(() => {
      setCartAmount(context.cartArray.length)
    }, [context.cartArray.length])


    return (
        <div>
            <IconButton aria-label="cart">
                <StyledBadge badgeContent={cartAmount} color="secondary">
                    <ShoppingCartIcon fontSize="large" style={cartStyle} />
                </StyledBadge>
            </IconButton>
        </div>
    )
}
