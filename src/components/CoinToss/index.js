import {useState} from 'react'
import './index.css' // Import your CSS file

const CoinToss = () => {
  const [headsCount, setHeadsCount] = useState(0)
  const [tailsCount, setTailsCount] = useState(0)
  const [totalCount, setTotalCount] = useState(0)
  const [tossResult, setTossResult] = useState('') // For heads or tails image

  const handleToss = () => {
    const result = Math.floor(Math.random() * 2) // Generates 0 or 1

    if (result === 0) {
      setHeadsCount(prevCount => prevCount + 1)
      setTossResult('heads')
    } else {
      setTailsCount(prevCount => prevCount + 1)
      setTossResult('tails')
    }

    setTotalCount(prevCount => prevCount + 1)
  }

  return (
    <div className="coin-toss-container">
      <img
        src={`https://assets.ccbp.in/frontend/react-js/${tossResult}-img.png`}
        alt="toss result"
        className="coin-image"
      />
      <div>
        <p>Heads Count: {headsCount}</p>
        <p>Tails Count: {tailsCount}</p>
        <p>Total Count: {totalCount}</p>
        <button type="button" onClick={handleToss}>
          Toss Coin
        </button>
      </div>
    </div>
  )
}

export default CoinToss
