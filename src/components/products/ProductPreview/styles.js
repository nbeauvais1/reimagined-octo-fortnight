import styled from 'styled-components';

const ProductPreviewStyles = styled.div`
    width: 300px;
    box-shadow: 1px 1px 4px #B0B7AA;
    padding: 1rem;
    color: #212529;

    h2 {
        padding-top: .5rem;
        margin-top: 1rem;
        border-top: 1px solid #758173;
    }

    img {
        opacity: .5;
    }

    h3 {
        text-align: right;
    }

    h2,
    h3 {
        font-weight: 600;
        font-size: 1.5rem;
        color: #758173;
        padding-bottom: 0.5rem;
    }

    p {
        font-size: .9rem;
    }
`;

export {ProductPreviewStyles}
