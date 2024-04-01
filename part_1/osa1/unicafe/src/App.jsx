import { useState } from 'react'

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>

const StasLine = (props) => <div>{props.text}: {props.value}</div>

const Stats = (props) => {
    const good = props.good
    const neutral = props.neutral
    const bad = props.bad

    if ((good + neutral + bad) == 0) {
      return (
        <div>No feedback given</div>
      ) 
    }

    return (
      <>
        <StasLine text='good' value={good} />
        <StasLine text='neutral' value={neutral} />
        <StasLine text='bad' value={bad} />
        <StasLine text='all' value={good + neutral + bad} />
        <StasLine text='average' value={good!=0||bad!=0?(good - bad)/(good+neutral+bad):0} />
        <StasLine text='positive' value={(good!=0?(good/(good + neutral + bad)*100):0) + ' %'} />
      </>
    )
  }

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
      <Stats good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App