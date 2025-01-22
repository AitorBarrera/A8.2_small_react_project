import { useState } from 'react'
import './App.css'
import FeedbackList from './FeedBackList/FeedbackList';

const inicialItem = {
  id: 0,
  text: 'happy',
  unicode: "😊",
}

const feedbackListItems = [
  {
    id: 0,
    text: 'happy',
    unicode: "😊",
  },
  {
    id: 1,
    text: 'Neutral',
    unicode: "😐",
  },
  {
    id: 2,
    text: 'Sad',
    unicode: "😢",
  },
  {
    id: 3,
    text: 'Thinking',
    unicode: "🤔",
  },
  {
    id: 4,
    text: 'Angry',
    unicode: "🤬",
  },
];

function App() {
  const [selectedFeedback, setSelectedFeedback] = useState(inicialItem);

  const onSelectedFeedbackHandler = (emoji) => {
    console.log("prueba");
    setSelectedFeedback(emoji);
  }

  return (
    <div className="app">
      <h1>Emoji Feedback App</h1>
      <FeedbackList feedbackListItems={feedbackListItems} onSelectedFeedbackHandler={onSelectedFeedbackHandler}/>
      <p>{selectedFeedback.text}</p>
    </div>
  )
}

export default App
