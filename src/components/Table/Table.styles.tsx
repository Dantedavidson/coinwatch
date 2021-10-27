import styled from 'styled-components';
import MUITableCell from '@mui/material/TableCell';
import MUITableContainer from '@mui/material/TableContainer';

export const TableContainer = styled(MUITableContainer)`
    && {
        background-color: '#182039';
        max-height: 70vh;
        margin-bottom: 1rem;
        padding: 1;

        &::-webkit-scrollbar {
            width: 8px;
        }

        &::-webkit-scrollbar-track {
            background-color: rgba(0, 0, 0, 0.3);
        }

        &::-webkit-scrollbar-thumb {
            background-color: rgba(179, 179, 179, 0.6);

            border-radius: 2px;
        }
    }
`;

export const TableCell = styled(MUITableCell)``;

export const Flex = styled.div`
    display: flex;
    align-items: center;
    img {
        margin-right: 0.5rem;
    }
`;
export const LoadingContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 6rem;
`;
