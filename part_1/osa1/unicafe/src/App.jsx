import { useState } from 'react'

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Please Give Feedback</h1>
      <br/><br/>
      <Button text='good' handleClick={ () => setGood(good + 1) } />&nbsp;
      <Button text='neutral' handleClick={ () => setNeutral(neutral + 1) } />&nbsp;
      <Button text='bad' handleClick={ () => setBad(bad + 1)} />&nbsp;
      <br/><br/>
      <h2>Statistics</h2>
      <br/>
      good {good}<br/>
      neutral {neutral}<br/>
      bad {bad}<br/>
      all {good + neutral + bad}<br/>
      average {(good - bad)/(good+neutral+bad)}<br/>
      positive {good!=0?(good/(good + neutral + bad)*100):0} %
    </div>
  )
}

export default App