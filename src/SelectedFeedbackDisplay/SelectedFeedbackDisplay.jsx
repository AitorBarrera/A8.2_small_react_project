import React from 'react'

export default function SelectedFeedbackDisplay({selectedFeedback}) {  
  
  return (
    <p className=''>{selectedFeedback.unicode} {selectedFeedback.text}</p>
  )
}