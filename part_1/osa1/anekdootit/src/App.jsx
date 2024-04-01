import { useState } from 'react'

const App = () => {
  
  const a = {
    0: {
      text: 'If it hurts, do it more often.',
      count: 0 
    },
    1: {
      text: 'Adding manpower to a late software project makes it later!',
      count: 0 
    },
    2: {
      text: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      count: 0 
    },
    3: {  
      text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      count: 0 
    },
    4: {
      text: 'Premature optimization is the root of all evil.',
      count: 0 
    },
    5: {
      text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      count: 0 
    },
    6: {
      text: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
      count: 0 
    },
    7: {
      text: 'The only way to go fast, is to go well.',
      count: 0 
    }
  }
   
  const [selected, setSelected] = useState(0)
  const [anecdotes, setAnectodes] = useState(a)

  const getMostVoted = () => {

    let winner = {}
    let max=0

    Object.keys(anecdotes).forEach(key => {
      //console.log('count for anectode[' + key + '] = ' + anecdotes[key].count)
      if (anecdotes[key].count > max) {
        winner = anecdotes[key]
        max = anecdotes[key].count       
      }
    });

    return winner

  }

  const winner = getMostVoted();

  return (
    <div>
      <h2>Anectode of the day</h2>
      <h3>"{anecdotes[selected].text}"</h3>
      This anecdote has {anecdotes[selected].count} votes
      <br/><br/>
      <button onClick={() => {
            const r = Math.floor((Math.random() * 8))
            //console.log('random:' + r)
            setSelected(r)
        }}>next anectode</button>&nbsp;&nbsp;
      <button onClick={() => {
            const copy = {...anecdotes}
            copy[selected].count += 1
            setAnectodes(copy)
            //console.log(anecdotes)
        }}>vote</button>
      <br/><br/>
      <h2>Acedote with most votes:</h2>
      { winner.count > 0 &&  
        <>
        <h3>"{winner.text}"</h3>
        Has {winner.count} votes
        </>
      }
    </div>
  )
}

export default App