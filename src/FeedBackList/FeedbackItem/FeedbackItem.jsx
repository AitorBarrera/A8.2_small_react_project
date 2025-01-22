import React from 'react'
import { useState } from 'react'

export default function FeedbackItem({item, onSelectedFeedbackHandler}) {
  return (
    <button
      name={item.text}
      id={item.id}
      className="btn bg-dark m-3"
      href="#"
      role="button"
      onClick={(e) => onSelectedFeedbackHandler(item)}
    >
      {item.unicode}
    </button>
  )
}