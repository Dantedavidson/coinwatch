import React from 'react';
import MUIPagination from '@mui/material/Pagination';
import styled from 'styled-components';
import Stack from '@mui/material/Stack';

const Pagination = styled(MUIPagination)`
    /* && {
        .MuiPaginationItem-root
            .MuiPaginationItem-sizeMedium
            .MuiPaginationItem-text
            .MuiPaginationItem-rounded
            .MuiPaginationItem-textPrimary
            .MuiPaginationItem-ellipsis
            .css-1v2lvtn-MuiPaginationItem-root {
            color: #fff;
        }
    } */
`;

interface Props {
    count: number;
    current: number;
    setPagination: React.Dispatch<
        React.SetStateAction<{
            totalPages: number;
            currentPage: number;
        }>
    >;
}

const PaginationBar = ({ count, current, setPagination }: Props) => {
    const handleChange = (value: number) => {
        setPagination((prev) => ({ ...prev, currentPage: value }));
    };
    return (
        <Stack spacing={2}>
            <Pagination
                color="primary"
                sx={{ color: 'white' }}
                count={count}
                showFirstButton
                showLastButton
                shape="rounded"
                page={current}
                onChange={(e, value) => handleChange(value)}
            />
        </Stack>
    );
};

export default PaginationBar;
