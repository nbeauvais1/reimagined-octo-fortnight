import styled from "styled-components";

const Heading1 = styled.h1`
    font-weight: ${props => props.Weight || "bold"};
    font-size: 2.1975rem;
    text-align: ${props => props.Align || "center"};;
`
const Underline = styled.hr`
    border: none;
    border-bottom: 3px solid ${props => props.Color || "#9C1D21"};;
    width: 150px;
    margin: ${props => props.Align || "0 auto"};;
    margin-bottom: 3rem;
`

export {Heading1, Underline};