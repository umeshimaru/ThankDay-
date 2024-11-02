import Name from './Name'
import { useState } from 'react'
import Button from './Button'

const Winner = () => {
  const [isWinnerShown, setIsWinnerShown] = useState(false)
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
    setIsWinnerShown((prev) => !prev)
  }
  return (
    <>
      <div>
        <h1>毎月1日は感謝Day</h1>
        <p>今月の当選者</p>
        {isWinnerShown && <Name members={members} />}
        <Button title="スタート" eventType={start} />
        <Button title="ストップ" />
        <Button title="もう一度" />
      </div>
    </>
  )
}

export default Winner
