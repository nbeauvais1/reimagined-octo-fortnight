import styled from 'styled-components';

const AppBarStyles = styled.nav`
background-color: #fff;
box-shadow: 2px 2px 6px #c2c1c0;
border-radius: 5px;
padding: 0.5rem 1rem;
margin-bottom: 1rem;
`;

const AppBarItems = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AppBarLogo = styled.li`
  width: 130px;  
`;

const AppBarItem = styled.li`
  
`;

export {AppBarStyles, AppBarItems, AppBarLogo, AppBarItem}
