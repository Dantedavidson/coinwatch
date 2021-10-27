import React from 'react';
import { Typography } from '@mui/material';
import * as S from './Tabs.styles';
import { DataState } from '../../types';

interface Props {
    onClickHandler: React.Dispatch<React.SetStateAction<DataState>>;
    current: 'market_cap_desc' | 'volume_desc';
}
const Tabs = ({ onClickHandler, current }: Props) => {
    const checkStatus = (value: string) => {
        return value === current;
    };
    return (
        <S.Container>
            <S.Tab
                onClick={() => onClickHandler((prev) => ({ ...prev, type: 'market_cap_desc' }))}
                active={checkStatus('market_cap_desc')}
            >
                <Typography variant="body2" align="center">
                    Market Cap
                </Typography>
            </S.Tab>
            <S.Tab
                onClick={() => onClickHandler((prev) => ({ ...prev, type: 'volume_desc' }))}
                active={checkStatus('volume_desc')}
            >
                <Typography variant="body2" align="center">
                    Trading Volume
                </Typography>
            </S.Tab>
        </S.Container>
    );
};

export default Tabs;
