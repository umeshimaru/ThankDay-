import { useEffect } from 'react'

const Name = ({ members, stopShuffle, winner, changeWinner }) => {
  useEffect(() => {
    if (stopShuffle) return
    const randomIndex = Math.floor(Math.random() * members.length)
    changeWinner((winner) => ({ name: members[randomIndex].name, url: members[randomIndex].url }))
  }, [winner])

  return (
    <div style={{ textAlign: 'center' }}>
      <p>{winner.name}</p>
      <img
        src={`/img/${winner.url}`}
        width="50px"
        height="50px"
        alt="サンプル画像 
     "
        style={{ margin: '0 auto', width: '100px', height: '100px' }}
      ></img>
    </div>
  )
}

export default Name
