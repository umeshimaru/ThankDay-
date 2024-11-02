import { useState, useEffect } from 'react'

const Name = ({ members }) => {
  const [winner, changeWinner] = useState({ name: members[0].name })

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * members.length)
    changeWinner((winner) => ({ ...winner, name: members[randomIndex].name }))
  }, [winner])

  return (
    <div>
      <p>{winner.name}</p>
      {/* <image></image> */}
    </div>
  )
}

export default Name
