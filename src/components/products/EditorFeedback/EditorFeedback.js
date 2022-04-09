import React from 'react';
import {AiOutlineCloudUpload, AiOutlineCheckCircle} from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import {Button3} from '../../../ui/buttons'
import {EditorFeedbackStyles, FeedBackMessage, FeedBack, FeedBackOption} from './styles'

function EditorFeedback ({children, status, writeCompleted, ...props})  {
  const navigator = useNavigate()
  return (
        <EditorFeedbackStyles  {...props}>
          {

            !status
            ?
            <FeedBack>
             <AiOutlineCheckCircle color="9C1D21" size="12rem"/>
             <FeedBackMessage>
               Product Uploaded Successfully
             </FeedBackMessage>
           </FeedBack>
           :
           <FeedBack>
             <AiOutlineCloudUpload color="9C1D21" size="12rem"/>
             <FeedBackMessage>
                Uploading New Product
             </FeedBackMessage>
           </FeedBack>

          } 

           <FeedBackOption>
              <Button3
              onClick={ ()=>writeCompleted(false) }
              disabled={status}
              >Add Another Product</Button3>
              <Button3
              onClick={()=> navigator('/dashboard')}
              >View All Products</Button3>
           </FeedBackOption>
        </EditorFeedbackStyles>
  )
}

export default EditorFeedback