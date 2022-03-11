import styled from "styled-components";

const Button = styled.button`
    border: none;
    background-color: #758173;
    padding: 0.5rem;
    color: #fff;
    border-radius: 5px;
    width: 100%;
`;

const Button2 = styled.button`
    border: none;
    background-color: #DCE5D3;
    padding: 0.5rem;
    color: #758173;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: .25rem;
`

const IconButton = styled.button`
    background-color: transparent;
    border: none;
`;

export {Button, Button2, IconButton}