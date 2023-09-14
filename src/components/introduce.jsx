import TypeWriter from './typeWriter'
import gift from '../assets/gift.png'
import { motion } from 'framer-motion'

const bounceAnimation = {
  bounce: {
    y: ['0%', '-30%', '0%'],
    transition: {
      duration: 1,
      repeat: Infinity,
    },
  },
}
const Introduce = () => {
  const handleBallClick = () => {
    const targetElement = document.getElementById('how_it_works')
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className={'introduce_container relative mt-[11.5625rem] '}>
      <div className={' introduce_wrapper grid grid-cols-2 gap-x-20 '}>
        <div className={'content  flex flex-col justify-center'}>
          <div
            className={
              'introduce_content_top max-w-[35.625rem] border-2 rounded-full  '
            }>
            <span
              className={
                'text-3xl text-center text-white tracking-wider pl-[1.875rem] pr-[1rem] pt-[1.125rem] pb-[1rem] box-border '
              }>
              INTRODUCING ROLLINGHUB
            </span>
          </div>
          <div className={'the_first_raffle_marketplace w-[43.75rem]'}>
            <span className={'text-white text-[4.5rem]'}>
              <TypeWriter />
            </span>
          </div>
          <div className={'introducing_sentence w-[41.4375rem] mt-[1.25rem] '}>
            <p className={'text-white whitespace-wrap tracking-wider'}>
              Rollinghub is an NFT marketplace designed for collectors to unlock
              rare digital assets by raffle, and meanwhile create their own
              lottery to sell digital assets.
            </p>
          </div>
        </div>
        <div className={'content_image_container '}>
          <img src={gift} alt="gift" />
        </div>
      </div>

      <div
        className="small_ball_container absolute flex justify-center items-center right-[50%] bottom-[-20%] w-[1.875rem] h-[3.75rem] border-2 border-gray-200 rounded-full bg-transparent cursor-pointer"
        onClick={handleBallClick}>
        <motion.div
          initial="bounce"
          animate="bounce"
          variants={bounceAnimation}
          className="small_ball absolute rounded-full w-[1.25rem] h-[1.25rem] border-2 bg-white cursor-pointer"
        />
      </div>
    </div>
  )
}

export default Introduce
