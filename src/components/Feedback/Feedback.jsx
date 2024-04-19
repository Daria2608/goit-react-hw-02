import css from './Feedback.module.css'

export default function Feedback({ feedback: { good, neutral, bad }, totalFeedback, positiveFeedback }) {

return <>
    <p className={css.text}>Good: {good}</p>
    <p className={css.text}>Neutral: {neutral}</p>
    <p className={css.text}>Bad: {bad}</p>
    <p className={css.text}>Total: {totalFeedback}</p>
    <p className={css.text}>Positive: {positiveFeedback}%</p>
  </>
}