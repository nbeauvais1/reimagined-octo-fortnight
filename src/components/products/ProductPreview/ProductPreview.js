import React from 'react'
import {ProductPreviewStyles, ProductImage, ProductName, ProductPrice, ProductDescription} from './styles'

function ProductPreview ({children, productImage, productName, productPrice, productDesc, ...props}){
    
    return(
        <ProductPreviewStyles {...props}>
            <ProductImage>
                <img src={productImage.previewImage} alt="Placeholder" />
            </ProductImage>
            <ProductName>{productName}</ProductName>
            <ProductPrice>${productPrice}</ProductPrice>
            <ProductDescription>{productDesc}</ProductDescription>
        </ProductPreviewStyles>
    )
}

export default ProductPreview