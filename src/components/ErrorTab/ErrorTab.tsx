import React from 'react';
import { Typography, Button } from '@mui/material';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 90vh;
`;
interface Props {
    onClickHandler: () => Promise<void>;
}
const ErrorTab = ({ onClickHandler }: Props) => {
    return (
        <Container>
            <Typography align="center" variant="h3" sx={{ color: '#fff' }}>
                Something went wrong when fetching your results.
            </Typography>{' '}
            <Button
                variant="outlined"
                sx={{ color: '#fff', borderColor: '#fff' }}
                onClick={onClickHandler}
            >
                Try Again
            </Button>
        </Container>
    );
};

export default ErrorTab;
