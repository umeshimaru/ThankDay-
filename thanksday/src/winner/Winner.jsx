import Name from './components/Name'
import { useState } from 'react'
import Btn from './components/Button'
import { members } from '../api/members'
import { Provider } from '../components/ui/provider'
import { Card } from '@chakra-ui/react'
import { BsArrowCounterclockwise } from 'react-icons/bs'

const Winner = () => {
  const [startShuffle, setStartShuffle] = useState(false)
  const [stopShuffle, setStopShuffle] = useState(false)
  const [winner, changeWinner] = useState('')

  const thisMonth = new Date().getMonth() + 1

  const restart = () => {
    if (stopShuffle) setStopShuffle((prev) => !prev)
    const randomIndex = Math.floor(Math.random() * members.length)
    changeWinner((winner) => ({ name: members[randomIndex].name, url: members[randomIndex].url }))
  }
  const start = () => {
    setStartShuffle((prev) => true)
    restart()
  }

  const stop = () => {
    setStopShuffle((prev) => !prev)
  }

  return (
    <>
      <Provider>
        <Card.Root
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 4px 8px rgba(169, 157, 157, 0.2)',
            borderRadius: '10px'
          }}
        >
          <Card.Body gap="2">
            <div style={{ textAlign: 'center', width: '100%' }}>
              <div>
                <h1>毎月1日は感謝Day</h1>
                <p>{thisMonth}月の当選者</p>
              </div>
              {startShuffle && (
                <Name members={members} stopShuffle={stopShuffle} winner={winner} changeWinner={changeWinner} />
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px' }}>
                <Btn title="スタート" eventType={start} color={'primary'} />
                <Btn title="ストップ" eventType={stop} color={'error'} />
                <Btn title="もう一度" eventType={restart} color={'success'} />
              </div>
            </div>
          </Card.Body>
        </Card.Root>
      </Provider>
    </>
  )
}

export default Winner
