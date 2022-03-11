import styled from 'styled-components';

const LoginPageStyles = styled.main`
    background-color: #DCE5D3;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Trebuchet MS;
    font-size: 1.25rem;
    color: #1B1524;
`
const LoginBox = styled.div`
    background-color: #F5F7F8;
    width: 60%;
    max-width: 1000px;
    display: flex;
    border-radius: 10px;      
`
const Div = styled.div`
    width: 50%;
`
const ContentDiv = styled.div`
    width: 50%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const Logo = styled.img`
    width: 20%;
    min-width: 50px;
    max-width: 100px;
    margin: 0 auto;
`


export {LoginPageStyles, LoginBox, Div, ContentDiv, Logo}