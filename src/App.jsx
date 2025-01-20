import { useState } from 'react'
import './App.css'
import FeedbackList from './FeedBackList/FeedbackList';

function App() {
  const [selectedFeedback, setSelectedFeedback] = useState();

  return (
    <div className="app">
      <h1>Emoji Feedback App</h1>
      <FeedbackList />
    </div>
  )
}

export default App
