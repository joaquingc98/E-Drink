import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import CartContext from '../context/CartContext';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#121a34",
        color: theme.palette.common.white,
        textAlign: "center"
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));




export const DenseTable = () => {

    
    const context = React.useContext(CartContext)


    
    const deleteItem = (item) => () => {
        context.removeItem(item)
    }
    

    return (
        <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table" className='cart-table'>
                <TableHead className='thead'>
                    <StyledTableRow>
                        <StyledTableCell>
                            <h1>Producto</h1>
                        </StyledTableCell>
                        <StyledTableCell >
                            <h1>Descripcion</h1>
                        </StyledTableCell>
                        <StyledTableCell align="right">
                            <h1>Cantidad</h1>
                        </StyledTableCell>
                        <StyledTableCell align="right">
                            <h1>Precio</h1>
                        </StyledTableCell>
                        <StyledTableCell align="right">
                        </StyledTableCell>
                    </StyledTableRow>
                </TableHead>
                <TableBody>
                    {context.cartArray.map((product) => (
                        <StyledTableRow
                            key={product.ID}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <StyledTableCell component="th" scope="row">
                                <img src={product.picture_URL} height="130"></img>
                            </StyledTableCell>
                            <StyledTableCell>{product.title}</StyledTableCell>
                            <StyledTableCell>{product.amount}</StyledTableCell>
                            <StyledTableCell>${product.total_price}</StyledTableCell>
                            <StyledTableCell>
                                <input type="image" src='./Icons/delete_Icon.png' height='30' onClick={deleteItem(product.ID)} />
                            </StyledTableCell>

                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
