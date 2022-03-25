import styled from 'styled-components';
import pnfBg from './404-garden.jpg'

const PNFStyles = styled.main`
    background-image: url(${pnfBg});
    background-position: center;
    height: 100vh;
`
const Banner = styled.div`
    text-align: center;
    background-color: #1B1524;
    opacity: 0.95;
    padding: 3rem 0;

    h1{
        color: #F5F7F8;
        margin-bottom: .5rem;
        font-weight: 400;
    }

    a {
    background-color: #9C1D21;
    padding: .5rem 2rem;
    border-radius: 3px;
    color: #fff;
    }

`;  


export {PNFStyles, Banner}