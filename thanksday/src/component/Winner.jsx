import Name from './Name'
import { useState ,createContext} from 'react'
import Button from './Button'
export const MyCompornent = createContext("");



const Winner = () => {
  const [isWinnerShown, setIsWinnerShown] = useState(false)
  const [stopShuffle, setStopShuffle] = useState(false)
  const [winner, changeWinner] = useState("")

  const members = [
    { name: 'まつかわX仙台のフルリモートエンジニア' },
    { name: 'padoさん' },
    { name: 'yukiさん' },
    { name: 'tohruさん' },
    { name: 'NabEさん' },
    { name: 'Ryutaさん' },
    { name: 'Kuro@エンジニア3年目さん' },
    { name: 'Taira Nobuhikoさん' },
    { name: '小南美佳さん' },
    { name: 'しっしーさん' },
    { name: 'Sayuさん' },
    { name: 'tak220さん' },
    { name: 'isnowballさん' },
    { name: 'グンコアさん(とりむぎさん)' },
    { name: 'まみさん' },
    { name: 'manaさん' },
    { name: '佐々木りささん' },
    { name: 'ゆうきさん' },
    { name: 'Keiさん' }
  ]

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
    changeWinner(winner => ({ ...winner, name: members[randomIndex].name }))
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
