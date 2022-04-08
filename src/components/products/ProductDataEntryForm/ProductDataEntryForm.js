import React from 'react';

import {ProductDataEntryFormStyles, ProductImage, ProductName, ProductPrice, ProductDescription} from './styles'
import {ProductImageDropBox} from '../ProductImageDropBox'
import {Label} from '../../../ui/forms/Label'
import {Input} from '../../../ui/forms/Input'
import {TextArea} from '../../../ui/forms/Textarea'
import {Button} from '../../../ui/buttons'

function ProductDataEntryForm ({children, setProductImage, handleProductName, handleProductPrice, handleProductDesc, handleSubmit, ...props})  {
  return (
        <ProductDataEntryFormStyles  {...props} onSubmit={handleSubmit}>
          <ProductImage>
            <Label>Product Image</Label>
            <ProductImageDropBox setProductImage={setProductImage}/>
          </ProductImage>

          <ProductName>
            <Label>Product Name</Label>
            <Input onChange={(e)=>handleProductName(e.target.value.trim())} maxLength={30} />
          </ProductName>

          <ProductPrice>
            <Label>Product Price</Label>
            <Input onChange={(e)=>handleProductPrice(e.target.value.trim())} maxLength={8} />
          </ProductPrice>

          <ProductDescription>
            <Label>Product Description</Label>
            <TextArea onChange={(e)=>handleProductDesc(e.target.value.trim())} maxLength={500} />
          </ProductDescription>
          
          <Button type="submit">Add New Product</Button>

        </ProductDataEntryFormStyles>
  )
}

export default ProductDataEntryForm