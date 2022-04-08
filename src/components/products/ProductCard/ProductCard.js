import React from 'react';

import {ProductCardStyles, ProductImage, ProductName, ProductPrice, ProductDescription} from './styles'

function ProductCard ({children, product, ...props})  {
  const{productName, productPrice, imageUrl, productDesc} = {...product}
  return (
        <ProductCardStyles  {...props}>
            <ProductImage>
                <img src={imageUrl} alt="Placeholder" />
            </ProductImage>
            <ProductName>{productName}</ProductName>
            <ProductPrice>${productPrice}</ProductPrice>
            <ProductDescription>{productDesc}</ProductDescription>
        </ProductCardStyles>
  )
}

export default ProductCard