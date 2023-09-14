import { useState, useEffect } from 'react'
import './typeWriter.css'
const TypeWriter = () => {
  const [currentIdx, setCurrentIdx] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prevIdx) => (prevIdx + 1) % 4)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <h2 className="text-white text-[4rem] mt-[0.625rem] whitespace-nowrap">
      The First Raffle Marketplace
      <div className="mask">
        <span
          style={
            currentIdx === 0
              ? { transform: 'translateY(-100%)' }
              : currentIdx === 1
              ? { transform: 'translateY(-250%)' }
              : {}
          }
          data-show={currentIdx === 0}>
          FOR FUN
        </span>
        <span
          style={
            currentIdx === 1
              ? { transform: 'translateY(-100%)' }
              : currentIdx === 2
              ? { transform: 'translateY(-250%)' }
              : {}
          }
          data-show={currentIdx === 1}>
          FOR PROFIT
        </span>
        <span
          style={
            currentIdx === 2
              ? { transform: 'translateY(-100%)' }
              : currentIdx === 3
              ? { transform: 'translateY(-250%)' }
              : {}
          }
          data-show={currentIdx === 2}>
          FOR COMMUNITY
        </span>
        <span
          style={currentIdx === 3 ? { transform: 'translateY(-100%)' } : {}}
          data-show={currentIdx === 3}>
          FOR EVERYONE
        </span>
      </div>
    </h2>
  )
}

export default TypeWriter
