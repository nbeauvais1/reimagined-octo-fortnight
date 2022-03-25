import React from 'react'
import {ProductPreviewStyles} from './styles'
import preview from './preview.png'

function ProductPreview (props){
    
    return(
        <ProductPreviewStyles>
            <h3>$18.00</h3>
            <img src={preview} alt="Image Preview" />
            <div>
                <h2>Product Name</h2>
                <p>Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic. Grape wattle seed kombu beetroot horseradish brussels sprout chard.</p>
            </div>
        </ProductPreviewStyles>
    )
}

export default ProductPreview