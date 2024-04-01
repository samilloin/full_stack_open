import { useState } from 'react'

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>

const StatsLine = (props) => {
    return (
      <tr>
        <td>
          {props.text}
        </td>
        <td>
          {props.value}
        </td>
      </tr>
    )
  }

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
      <table>
        <tbody>
        <StatsLine text='good' value={good} />
        <StatsLine text='neutral' value={neutral} />
        <StatsLine text='bad' value={bad} />
        <StatsLine text='all' value={good + neutral + bad} />
        <StatsLine text='average' value={good!=0||bad!=0?(good - bad)/(good+neutral+bad):0} />
        <StatsLine text='positive' value={(good!=0?(good/(good + neutral + bad)*100):0) + ' %'} />
        </tbody>
      </table>
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