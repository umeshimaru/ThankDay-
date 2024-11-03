import { useState, useEffect } from 'react'

const Name = ({ members ,stopShuffle}) => {
  const [winner, changeWinner] = useState({ name: members[0].name })

  // stopを押された後にスタート押したらwinnerをまた更新する。そうしないと２回目以降のスタートが機能しない



  useEffect(() => {
    if (stopShuffle) return;
    const randomIndex = Math.floor(Math.random() * members.length)
    changeWinner(winner => ({ ...winner, name: members[randomIndex].name }))
  }, [winner])

  return (
    <div>
      <p>{winner.name}</p>
      {/* <image></image> */}
    </div>
  )
}

export default Name
