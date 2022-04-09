import React from 'react';

import {ProductCardStyles, ProductImage, ProductName, ProductPrice, ProductDescription, Text} from './styles'

function ProductCard ({children, product, ...props})  {
  const{productName, productPrice, imageUrl, productDesc} = {...product}
  return (
        <ProductCardStyles  {...props}>
            <ProductImage>
                <img src={imageUrl} alt="Placeholder" />
            </ProductImage>
            <Text>
            <ProductName>{productName}</ProductName>
            <ProductPrice>${productPrice}</ProductPrice>
            <ProductDescription>{productDesc}</ProductDescription>
            </Text>
        </ProductCardStyles>
  )
}

export default ProductCard