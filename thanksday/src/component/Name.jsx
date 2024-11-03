import { useState, useEffect,useContext } from 'react'
import { MyCompornent } from './Winner'

const Name = ({ members ,stopShuffle}) => {
  const [winner, changeWinner] = useContext(MyCompornent)

  useEffect(() => {
    if (stopShuffle) return;
    const randomIndex = Math.floor(Math.random() * members.length)
    changeWinner(winner => ({name: members[randomIndex].name,url: members[randomIndex].url }))
  }, [winner])

  return (
    <div>
      <p>{winner.name}</p>
      <img src={`/img/${winner.url}`} width="50px" height="50px"alt="サンプル画像" align="top" ></img>
    </div>
  )
}

export default Name
