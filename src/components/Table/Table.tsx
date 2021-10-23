import React, { useState, useEffect } from 'react';
import MUITable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Table = ({ results }: { results: any[] }) => {
    return (
        <TableContainer component={Paper}>
            <MUITable sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Symbol</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Current Price</TableCell>
                        <TableCell align="right">Change</TableCell>
                        <TableCell align="right">% Change</TableCell>
                        <TableCell align="right">Market Cap</TableCell>
                        <TableCell align="right">Total Volume</TableCell>
                        <TableCell align="right">Circulating Supply</TableCell>
                        <TableCell align="right">Updated At</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {results.map((result) => {
                        return (
                            <TableRow
                                key={result.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>
                                    <img
                                        src={result.image}
                                        alt={`${result.name} logo`}
                                        height={16}
                                        width={16}
                                    />
                                    {result.symbol}
                                </TableCell>
                                <TableCell align="right">{result.name}</TableCell>
                                <TableCell align="right">{result.current_price}</TableCell>
                                <TableCell align="right">{result.price_change_24h}</TableCell>
                                <TableCell align="right">
                                    {result.price_change_percentage_24h}
                                </TableCell>
                                <TableCell align="right">{result.market_cap}</TableCell>
                                <TableCell align="right">{result.total_volume}</TableCell>
                                <TableCell align="right">{result.circulating_supply}</TableCell>
                                <TableCell align="right">{result.last_updated}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </MUITable>
        </TableContainer>
    );
};

export default Table;
