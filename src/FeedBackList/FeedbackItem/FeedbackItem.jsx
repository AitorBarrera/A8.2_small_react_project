import React from 'react'
import { useState } from 'react'

export default function FeedbackItem({item, selectedFeedbackItem, onSelectedFeedbackHandler}) {
  return (
    <button
      name={item.text}
      id={item.id}
      className={selectedFeedbackItem.id === item.id ? 'selected btnFeedbackItem m-3' : 'btnFeedbackItem m-3 h-50'}
      href="#"
      role="button"
      onClick={(e) => onSelectedFeedbackHandler(item)}
    >
      {item.unicode}
    </button>
  )
}