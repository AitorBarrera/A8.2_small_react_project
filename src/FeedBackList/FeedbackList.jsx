import React from 'react'
import { useState } from 'react'
import FeedbackItem from './FeedbackItem/FeedbackItem';

export default function FeedbackList({feedbackListItems, onSelectedFeedbackHandler}) {  
  
  return (
    <div>
        <p>FeedbackList</p>
        {feedbackListItems.map((item) => (
            <FeedbackItem 
                  key={item.id} 
                  item={item} 
                  onSelectedFeedbackHandler={onSelectedFeedbackHandler}
                  />
        ))}
    </div>
  )
}