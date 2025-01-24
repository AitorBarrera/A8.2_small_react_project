import React from 'react'
import { useState } from 'react'
import FeedbackItem from './FeedbackItem/FeedbackItem';

export default function FeedbackList({feedbackListItems, selectedFeedbackItem,onSelectedFeedbackHandler}) {  
  
  return (
    <div className='w-100 row'>
        {feedbackListItems.map((item) => (
            <div className='col d-flex justify-content-center align-items-center'>
            <FeedbackItem 
                  key={item.id} 
                  item={item}
                  selectedFeedbackItem={selectedFeedbackItem}
                  onSelectedFeedbackHandler={onSelectedFeedbackHandler}
                  />
          </div>
        ))}
    </div>
  )
}