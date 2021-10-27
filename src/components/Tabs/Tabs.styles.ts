import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    margin-bottom: 1.5rem;
`;

interface TabProps {
    active: boolean;
}
export const Tab = styled.div<TabProps>`
    width: 7.5rem;
    border-bottom: 1px solid ${(props) => (props.active ? '#b37382' : '#fff')};
    color: ${(props) => (props.active ? '#b37382' : '#fff')};
    cursor: pointer;
`;
