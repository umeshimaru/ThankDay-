import Name from './Name'
import { useState ,createContext} from 'react'
import Button from './Button'
import { members } from './Module';
export const MyCompornent = createContext("");



const Winner = () => {

  const [isWinnerShown, setIsWinnerShown] = useState(false)
  const [stopShuffle, setStopShuffle] = useState(false)
  const [winner, changeWinner] = useState("")

 

  const start = () => {
    setIsWinnerShown((prev) => true)
    if(stopShuffle){ 
      setStopShuffle(prev => !prev)
      
    }
  }

  const stop = () => {
    setStopShuffle((prev) => !prev)
  }
  const restart = () => {
    if(stopShuffle){ 
      setStopShuffle(prev => !prev)
    }
    const randomIndex = Math.floor(Math.random() * members.length)
    changeWinner(winner => ({name: members[randomIndex].name ,url: members[randomIndex].url}))
  }

  return (
    <>
      <div>
        <h1>毎月1日は感謝Day</h1>
        <p>今月の当選者</p>
        <MyCompornent.Provider value={[winner, changeWinner]}>
          {isWinnerShown && <Name members={members}   stopShuffle={stopShuffle} />}
          <Button title="スタート" eventType={start} />
          <Button title="ストップ" eventType={stop}/>
          <Button title="もう一度" eventType={restart}/>
        </MyCompornent.Provider>
      </div>
    </>
  )
}

export default Winner
