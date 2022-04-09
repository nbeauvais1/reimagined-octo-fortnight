import styled from 'styled-components';



const EditorFeedbackStyles  = styled.div`
 width: 50%;
 margin: 0 auto;
`
const FeedBackMessage = styled.div`
font-size: 1.5rem;
font-weight: 600;
  
`

const FeedBack = styled.figure`
display: flex;
flex-direction: column;
align-items: center;
`

const FeedBackOption = styled.footer`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
`
;

export {EditorFeedbackStyles, FeedBackMessage, FeedBack, FeedBackOption}