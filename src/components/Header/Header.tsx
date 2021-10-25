import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/logo.svg';

const Container = styled.div`
    width: 100%;
    padding: 1rem;
`;

const Header = () => {
    return (
        <Container>
            <img src={Logo} alt="Caleb and Brown company logo" width={200} />
        </Container>
    );
};

export default Header;
