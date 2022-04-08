import React, {useState} from 'react';

import {useNumberFormat} from '../../../../hooks/useNumberFormat'
import { useAddNewProduct } from '../../../../hooks/useAddNewProduct';
import {AddProductStyles} from './styles'
import {ProductEditor} from "../../ProductEditor"
import {EditorFeedback} from "../../EditorFeedback"
import ProductPreview from '../../ProductPreview/preview.png'

  const defaults={
    description:`Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori. Grape wattle seed kombu beetroot horseradish carrot squash brussels sprout chard.`,
    name: "Product Name",
    price:32.99,
  }

function AddProduct ({children, ...props})  {
  const [isWriting, setIsWriting] = useState(false)
  const [productName, setProductName] = useState(defaults.name)
  const [productPrice, setProductPrice] = useState(defaults.price)
  const [productDesc, setProductDesc] = useState(defaults.description)
  const [productImage, setProductImage] = useState({previewImage:ProductPreview, file:null})
  const formatter = useNumberFormat()
  const [loading, productLoader] = useAddNewProduct();

  function handleProductName (name){
    setProductName(name)
  }

  function handleProductPrice (price){
    setProductPrice(formatter(price))
  }

  function handleProductDesc (description){
    setProductDesc(description)
  }

  function handleSubmit (e) {
    e.preventDefault();
    const productData = {
      productName,
      productPrice,
      productDesc
    }
    setIsWriting(true)
    productLoader(productData, productImage.file)
    setProductDesc(defaults.description)
    setProductImage({previewImage:ProductPreview})
    setProductName(defaults.name)
    setProductPrice(defaults.price)
  }

  if(isWriting){
    return <EditorFeedback status={loading} writeCompleted={setIsWriting}/>
  }
  else
  {
    return (
      <AddProductStyles  {...props}>
         <ProductEditor 
         productName={productName} 
         productPrice={productPrice}
         productDesc={productDesc}  
         productImage={productImage} 
         handleProductName={handleProductName}
         handleProductPrice={handleProductPrice}
         handleProductDesc={handleProductDesc}
         setProductImage={setProductImage}
         handleSubmit={handleSubmit}
         />

      </AddProductStyles>
)
  }

}

export default AddProduct