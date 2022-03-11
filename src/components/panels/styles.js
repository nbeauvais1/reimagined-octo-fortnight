import styled from 'styled-components';

const PanelStyles = styled.section`
background-color: #fff;
box-shadow: 2px 2px 6px #c2c1c0;
border-radius: 5px;
padding: 0.5rem 1rem;
grid-column: span 4;
height: calc(100vh - 130px);
`;

const Path = styled.div`
display: flex;
align-items: center;
`

const TopBar = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 1rem;
border-bottom: 1px solid #C2C1C0;
`

export {PanelStyles, Path, TopBar}
