import styled from "styled-components";

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    border: none;
    box-shadow: 2px 2px 6px #c2c1c0;
    padding: 0.5rem;
    border-radius: 5px;
    margin-bottom: 2rem;
`

const ForgotPassword = styled.a`
    font-size: 1rem;
    font-weight: 100;
    color: #9C1D21;
    text-decoration: underline;
    text-align: right;
    margin-bottom: 1rem;
`

export {Form, Input, ForgotPassword}