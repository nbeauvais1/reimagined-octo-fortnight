import styled from 'styled-components';

const PanelStyles = styled.section`
background-color: #fff;
box-shadow: 2px 2px 6px #c2c1c0;
border-radius: 5px;
padding:  0 1rem 0.5rem 1rem;
grid-column: span 4;
height: calc(100vh - 130px);
overflow: scroll;
overflow-x: hidden;
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
margin-bottom: 1rem;
position: sticky;
top: 0%;
z-index: 1;
background-color: #fff;
`
const Products = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
`

const PanelForms = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 60%;
  margin: 0 auto;
  padding: 1.5rem 3rem;
`;

export {PanelStyles, Path, TopBar, Products, PanelForms}
