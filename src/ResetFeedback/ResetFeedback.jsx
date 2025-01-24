import React from 'react'

export default function ResetFeedback({onClickedResetFeedback}) {  
  
  return (
    <a 
        type="button" 
        className="btn resetButton"
        onClick={(e) => onClickedResetFeedback()}
        >Reset Feedback</a>
  )
}