import styled from 'styled-components';



const ProductCardStyles  = styled.div`
    width: 20%;
    min-width: 300px;
    padding: 2rem 1.5rem;
    box-shadow: 2px 2px 6px #c2c1c0;

`

const ProductImage = styled.div`
  margin-bottom: 2rem;
`;

const Text = styled.div`
`;

const ProductName = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
`;

const ProductPrice = styled.p`
  font-size: 1.25rem;
`;

const ProductDescription = styled.p`
  margin-top: 1rem;
`;
;

export {ProductCardStyles, Text, ProductImage, ProductName, ProductPrice, ProductDescription}