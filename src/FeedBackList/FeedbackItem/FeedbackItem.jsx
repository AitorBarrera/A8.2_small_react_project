import React from 'react'
import { useState } from 'react'

export default function feedbackItem({feedbackItem}) {
  return (
    <a
    name={feedbackItem.text}
    id={feedbackItem.id}
    class="btn btn-primary"
    href="#"
    role="button"
    >
    {feedbackItem.unicode}
    </a>
  )
}