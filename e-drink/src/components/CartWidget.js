import React from 'react'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

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
    return (
        <div>
            <IconButton aria-label="cart">
                <StyledBadge badgeContent={4} color="secondary">
                    <ShoppingCartIcon fontSize="large" style={cartStyle} />
                </StyledBadge>
            </IconButton>
        </div>
    )
}
