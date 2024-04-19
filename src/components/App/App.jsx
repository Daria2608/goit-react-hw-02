import { useState, useEffect } from 'react'
import Description from '../Description/Description'
import Feedback from '../Feedback/Feedback'
import Options from '../Options/Options'
import Notification from '../Notification/Notification'
import './App.css'

export default function App() {
  
  const [feedback, setFeedback] = useState(() => { 
    const savedFeedback = JSON.parse(localStorage.getItem('feedbackCount'))  
    if (savedFeedback !== null) {
      return savedFeedback
    }
    else {
      return {good: 0, neutral: 0, bad: 0}
    }
  })
 
  
  useEffect(() => { localStorage.setItem('feedbackCount', JSON.stringify(feedback)); }, [feedback])

  const updateFeedback = feedbackType => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1
    })
  }
 
  const resetFeedback = () => {
    setFeedback({
	   good: 0,
	   neutral: 0,
	   bad: 0
    })
  }

 const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
 const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);


  return <>
    <Description />
    <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} resetFeedback={resetFeedback} />
    {totalFeedback > 0 && <Feedback positiveFeedback={positiveFeedback} totalFeedback={totalFeedback} feedback={feedback} />}
    {totalFeedback <= 0 && <Notification/>}
  </>
}