import styled from "styled-components";

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    border: none;
    box-shadow: 1px 1px 4px #B0B7AA;
    padding: 0.5rem;
    border-radius: 3px;
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