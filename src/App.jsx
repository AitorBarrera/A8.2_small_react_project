import { useState } from 'react'
import './App.css'
import FeedbackList from './FeedBackList/FeedbackList';
import ResetFeedback from './ResetFeedback/ResetFeedback';
import SelectedFeedbackDisplay from './SelectedFeedbackDisplay/SelectedFeedbackDisplay';

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
  const [selectedFeedback, setSelectedFeedback] = useState({});

  const onSelectedFeedbackHandler = (emoji) => {
    console.log("prueba");
    setSelectedFeedback(emoji);
  }

  const resetSelectedFeedback = () => {
    setSelectedFeedback("");
  }

  return (
    <div className="app h-100 w-100">
      <h1>Emoji Feedback App</h1>
      <div className="h-100 w-100 d-flex flex-column align-items-center">
        
        <div className='mt-5 w-100 h-50 align-items-center'>
          <h3>How was your experience?</h3>
          <div className='row h-100'>
            <FeedbackList 
              feedbackListItems={feedbackListItems}
              selectedFeedbackItem={selectedFeedback}
              onSelectedFeedbackHandler={onSelectedFeedbackHandler}/>
          </div>
        </div>
        
        <div className='mt-5 h-25 selectedFeedbackContainer'>
          <h2>Selected Feedback</h2>
          <SelectedFeedbackDisplay selectedFeedback={selectedFeedback}/>
        </div>
        
        <ResetFeedback onClickedResetFeedback={resetSelectedFeedback}/>
      
      </div>
    </div>
  )
}

export default App
