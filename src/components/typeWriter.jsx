import Typewriter from 'typewriter-effect'
import './typeWriter.css'
function TypingComponent() {
  return (
    <span className="typing-color">
      <Typewriter
        options={{
          cursor: '',
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString('The First Raffle Marketplace')
            .pauseFor(1000)
            .deleteAll()
            .typeString('For Fun, For Profit, For Everyone !')
            .pauseFor(1000)
            .deleteAll()
            .typeString('The First Raffle Marketplace')
            .stop()
            .start()
        }}
      />
    </span>
  )
}

export default TypingComponent
