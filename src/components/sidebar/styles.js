import styled from 'styled-components';

const SideBarStyles = styled.section`
background-color: #fff;
box-shadow: 2px 2px 6px #c2c1c0;
border-radius: 5px;
padding: 0.5rem 0;
`;

const SideBarGroup = styled.div`
    border-bottom: 1px solid #C2C1C0;
`

const SideBarItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
`

const FlexItem = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
`

export {SideBarStyles, SideBarGroup, SideBarItem, FlexItem}
