import React from 'react';
import { VictoryLine } from 'victory';
import { CircularProgress } from '@mui/material';
import MUITable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
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
                    <TableBody data-testid="tbody">
                        {display.map((result, index) => {
                            const {
                                id,
                                image,
                                name,
                                symbol,
                                current_price: currentPrice,
                                price_change_24h: priceChange24h,
                                price_change_percentage_24h: priceChangePercentage24h,
                                market_cap: marketCap,
                                total_volume: totalVolume,
                                circulating_supply: circulatingSupply,
                                sparkline_in_7d: { price = '' } = {},
                            } = result;
                            return (
                                <TableRow
                                    key={id || index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    data-testid="tbody-row"
                                >
                                    <S.TableCell>
                                        <S.Flex>
                                            {image && (
                                                <img
                                                    src={image}
                                                    alt={`${name} logo`}
                                                    height={16}
                                                    width={16}
                                                />
                                            )}
                                            {symbol}
                                        </S.Flex>
                                    </S.TableCell>
                                    <S.TableCell align="right">{name}</S.TableCell>
                                    <S.TableCell align="right">{`$${currentPrice}`}</S.TableCell>
                                    <S.TableCell align="right">{priceChange24h}</S.TableCell>
                                    <S.TableCell align="right">
                                        {priceChangePercentage24h}
                                    </S.TableCell>
                                    <S.TableCell align="right">
                                        {new Intl.NumberFormat().format(marketCap)}
                                    </S.TableCell>
                                    <S.TableCell align="right">
                                        {new Intl.NumberFormat().format(totalVolume)}
                                    </S.TableCell>
                                    <S.TableCell align="right">
                                        {new Intl.NumberFormat().format(circulatingSupply)}
                                    </S.TableCell>
                                    <S.TableCell align="right" sx={{ maxWidth: 100 }}>
                                        {price.length > 0 && (
                                            <VictoryLine
                                                data={Utlity.formatSparkline(price)}
                                                style={{
                                                    data: {
                                                        stroke:
                                                            price[0] >= price[price.length - 1]
                                                                ? 'red'
                                                                : 'green',
                                                    },
                                                }}
                                            />
                                        )}
                                    </S.TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                )}
            </MUITable>
            {loading && (
                <S.LoadingContainer data-testid="loader">
                    <CircularProgress />
                </S.LoadingContainer>
            )}
        </S.TableContainer>
    );
};

export default Table;
