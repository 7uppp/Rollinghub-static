import TypingComponent from './typeWriter'
import gift from '../assets/gift.png'

const Introduce = () => {
  return (
    <div className={'introduce_container mt-[11.5625rem] '}>
      <div className={' introduce_wrapper grid grid-cols-2 gap-x-20 '}>
        <div className={'content  flex flex-col justify-center'}>
          <div
            className={
              'introduce_content_top max-w-[35.625rem] border-2 rounded-full  '
            }>
            <span
              className={
                'text-3xl text-white tracking-wider pl-[1.875rem] pr-[1.625rem] pt-[1.125rem] pb-[1rem] box-border '
              }>
              INTRODUCING ROLLINGHUB
            </span>
          </div>
          <div className={'the_first_raffle_marketplace w-[33rem]'}>
            <span className={'text-white text-[4.5rem]'}>
              <TypingComponent />
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
    </div>
  )
}

export default Introduce
