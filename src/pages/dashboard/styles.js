import styled from 'styled-components';

const DashBoard = styled.main`
    background-color: #F5F7F8;
    height: 100vh;
    padding: 1.5rem;
`
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;
`

export {DashBoard, Grid}