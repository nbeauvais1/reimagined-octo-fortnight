import React from 'react';
import {AiOutlineCloudUpload, AiOutlineCheckCircle} from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import {Button} from '../../../ui/buttons'
import {EditorFeedbackStyles, FeedBackMessage, FeedBack, FeedBackOption} from './styles'

function EditorFeedback ({children, status, writeCompleted, ...props})  {
  const navigator = useNavigate()
  return (
        <EditorFeedbackStyles  {...props}>
          {

            !status
            ?
            <FeedBack>
             <AiOutlineCheckCircle color="d9599d" size="12rem"/>
             <FeedBackMessage>
               Product Uploaded Successfully
             </FeedBackMessage>
           </FeedBack>
           :
           <FeedBack>
             <AiOutlineCloudUpload color="d9599d" size="12rem"/>
             <FeedBackMessage>
                Uploading New Product
             </FeedBackMessage>
           </FeedBack>

          } 

           <FeedBackOption>
              <Button
              onClick={ ()=>writeCompleted(false) }
              disabled={status}
              >Add Another Product</Button>
              <Button
              onClick={()=> navigator('/dashboard')}
              >View All Products</Button>
           </FeedBackOption>
        </EditorFeedbackStyles>
  )
}

export default EditorFeedback