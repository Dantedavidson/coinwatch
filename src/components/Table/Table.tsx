import React, { useState, useEffect } from 'react';
import { DateTime } from 'luxon';
import { VictoryLine } from 'victory';
import { CircularProgress } from '@mui/material';
import MUITable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Utlity from '../../utility';
import * as S from './Table.styles';

interface Props {
    display: any[];
    loading: boolean;
}
const Table = ({ display, loading }: Props) => {
    return (
        <S.TableContainer>
            <MUITable size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <S.TableCell>Symbol</S.TableCell>
                        <S.TableCell align="right">Name</S.TableCell>
                        <S.TableCell align="right">Current Price</S.TableCell>
                        <S.TableCell align="right">Change</S.TableCell>
                        <S.TableCell align="right">% Change</S.TableCell>
                        <S.TableCell align="right">Market Cap</S.TableCell>
                        <S.TableCell align="right">Total Volume</S.TableCell>
                        <S.TableCell align="right">Circulating Supply</S.TableCell>
                        <S.TableCell align="right">7 Day Chart</S.TableCell>
                    </TableRow>
                </TableHead>
                {!loading && (
                    <TableBody>
                        {display.map((result) => {
                            return (
                                <TableRow
                                    key={result?.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <S.TableCell>
                                        <S.Flex>
                                            <img
                                                src={result?.image}
                                                alt={`${result?.name} logo`}
                                                height={16}
                                                width={16}
                                            />
                                            {result.symbol}
                                        </S.Flex>
                                    </S.TableCell>
                                    <S.TableCell align="right">{result?.name}</S.TableCell>
                                    <S.TableCell align="right">{result?.current_price}</S.TableCell>
                                    <S.TableCell align="right">
                                        {result?.price_change_24h}
                                    </S.TableCell>
                                    <S.TableCell align="right">
                                        {result?.price_change_percentage_24h}
                                    </S.TableCell>
                                    <S.TableCell align="right">{result?.market_cap}</S.TableCell>
                                    <S.TableCell align="right">{result?.total_volume}</S.TableCell>
                                    <S.TableCell align="right">
                                        {result?.circulating_supply}
                                    </S.TableCell>
                                    <S.TableCell align="right" sx={{ maxWidth: 100 }}>
                                        <VictoryLine
                                            data={Utlity.formatSparkline(
                                                result.sparkline_in_7d.price,
                                            )}
                                            style={{
                                                data: {
                                                    stroke:
                                                        result.sparkline_in_7d.price[0] >=
                                                        result.sparkline_in_7d.price[
                                                            result.sparkline_in_7d.price.length - 1
                                                        ]
                                                            ? 'red'
                                                            : 'green',
                                                },
                                            }}
                                        />
                                    </S.TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                )}
            </MUITable>
            {loading && (
                <S.LoadingContainer>
                    <CircularProgress />
                </S.LoadingContainer>
            )}
        </S.TableContainer>
    );
};

export default Table;
