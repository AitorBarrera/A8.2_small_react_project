import React from 'react'
import { useState } from 'react'
import FeedbackItem from './FeedbackItem/FeedbackItem';

const feedbackListItems = [
    {
      id: 0,
      text: 'happy',
      unicode: "U+1F609",
    }
  ];


export default function FeedbackList({onSelectedFeedbackHandler}) {
  const [feedbackListItems, setFeedbackListItems] = useState("");

  return (
    <div>
        <p>dsa</p>
        {feedbackListItems.map((feedbackItem) => {
           <FeedbackItem feedbackItem={feedbackItem}/>
        })}
    </div>
  )
}