import { useState } from 'react'
import { motion } from 'framer-motion'
import './bodyIntroduce.css'
import listnft from '../assets/listnft.png'
import share from '../assets/share.png'
import dollar from '../assets/dollar.png'
import submit from '../assets/submit.png'
import onchain from '../assets/onchain.png'
import community from '../assets/community.png'
import leftShadow from '../assets/leftShadow.png'
import rightShadow from '../assets/rightShadow.png'
import withdraw from '../assets/withdraw.png'
import find from '../assets/find.png'
import share2 from '../assets/share2.png'

const BodyIntroduce = () => {
  const [button1Clicked, setButton1Clicked] = useState(true)
  const [button2Clicked, setButton2Clicked] = useState(false)

  const handleButton1Click = () => {
    setButton1Clicked(true)
    setButton2Clicked(false)
  }

  const handleButton2Click = () => {
    setButton1Clicked(false)
    setButton2Clicked(true)
  }

  return (
    <div
      id="how_it_works"
      className={
        'bodyIntroduce_container w-[87.3125rem] flex flex-col justify-center items-center '
      }>
      <span className={'introduce_title text-[3rem]'}>How It Works</span>

      <motion.div
        className={
          'choose_buttons_container flex flex-col justify-center items-center mt-[2.75rem]'
        }>
        <div
          className={
            'buttons flex justify-center items-center gap-[15.125rem]'
          }>
          <button
            className={`button_1 text-[1.5rem] font-bold ${
              button1Clicked ? 'text-blue-700' : 'text-gray-500'
            } outline-none`}
            onClick={() => {
              handleButton1Click()
            }}>
            Create boxes & list NFTs
          </button>
          <button
            className={`button_2  text-[1.5rem] font-bold ${
              button2Clicked ? 'text-blue-700' : 'text-gray-500'
            } outline-none`}
            onClick={() => {
              handleButton2Click()
            }}>
            Buy tickets & win NFTs
          </button>
        </div>

        {button1Clicked ? (
          <div
            className={
              'create_boxes_contents flex gap-[10.3125rem] mt-[4.375rem]'
            }>
            <motion.div
              whileHover={{ scale: 1.2 }}
              className={
                'list_nft-into-boxes flex justify-center items-center'
              }>
              <div className="flex flex-col gap-[1.25rem] ">
                <img src={listnft} alt="listnft" className="w-[6rem] mx-auto" />
                <span
                  className={
                    'text-[1.5rem] font-semibold text-center h-[4rem]'
                  }>
                  List NFTs into boxes
                </span>
                <p
                  className={
                    'whitespace-wrap text-[1.125rem] text-center h-[3.75rem]'
                  }>
                  List NFTs like what you do on other NFT marketplace,
                  Rollinghub will issue tickets for you.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.2 }}
              className={'share_box  flex  justify-center items-center '}>
              <div className="flex flex-col gap-[1.25rem] ">
                <img src={share} alt="shareIcon" className="w-[6rem] mx-auto" />
                <span
                  className={
                    'text-[1.5rem] font-semibold text-center h-[4rem]'
                  }>
                  Share box link to friends or communities
                </span>
                <p
                  className={
                    'w-[22.0625rem] whitespace-wrap text-[1.125rem] text-center h-[3.75rem]'
                  }>
                  It's a good idea to call friends and communities to take
                  tickets from the box you created.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.2 }}
              className={'withdraw_eth flex justify-center items-center'}>
              <div className="flex flex-col gap-[1.25rem]">
                <img
                  src={dollar}
                  alt="dollarIcon"
                  className="w-[6rem] mx-auto"
                />
                <span
                  className={
                    'text-[1.5rem] font-semibold text-center h-[4rem] '
                  }>
                  Withdraw ETH
                </span>
                <p
                  className={
                    'w-[22.0625rem] whitespace-wrap text-[1.125rem] text-center h-[3.75rem] '
                  }>
                  You can withdraw ETH from boxes sold out.
                </p>
              </div>
            </motion.div>
          </div>
        ) : (
          <div
            className={
              'buy_tickets_contents flex gap-[10.3125rem] mt-[4.375rem]'
            }>
            <motion.div
              whileHover={{ scale: 1.2 }}
              className={'find_nfts flex justify-center items-center ]'}>
              <div className="flex flex-col gap-[1.25rem] ">
                <img src={find} alt="findnft" className="w-[6rem] mx-auto" />
                <span
                  className={
                    'text-[1.5rem] font-semibold text-center h-[4rem]'
                  }>
                  Find NFTs & Buy tickets
                </span>
                <p
                  className={
                    'w-[22.0625rem] whitespace-wrap text-[1.125rem] text-center h-[3.75rem]'
                  }>
                  You can find NFTs, and buy tickets of the corresponding box to
                  win them.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.2 }}
              className={'share_box flex justify-center items-center'}>
              <div className="flex flex-col gap-[1.25rem]">
                <img
                  src={share2}
                  alt="shareIcon"
                  className="w-[6rem] mx-auto"
                />
                <span
                  className={
                    'text-[1.5rem] font-semibold text-center h-[4rem]'
                  }>
                  Share box link to friends or communities
                </span>
                <p
                  className={
                    'w-[22.0625rem] whitespace-wrap text-[1.125rem] text-center h-[3.75rem]'
                  }>
                  It's a good idea to call friends and communities to take
                  tickets from the box you participated.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.2 }}
              className={'withdraw_prize flex justify-center items-center'}>
              <div className="flex flex-col  gap-[1.25rem]">
                <img
                  src={withdraw}
                  alt="withdraw"
                  className="w-[6rem] mx-auto"
                />
                <span
                  className={
                    'text-[1.5rem] font-semibold text-center  h-[4rem] '
                  }>
                  Withdraw prizes
                </span>
                <p
                  className={
                    'w-[22.0625rem] whitespace-wrap text-[1.125rem] text-center h-[3.75rem]'
                  }>
                  when the total asset value is accumulated, winner become the
                  new owners of the assets, and the other participants get
                  rewards.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </motion.div>

      <div
        className={
          'fully_decentralized_content_container relative flex flex-col items-center mt-[15.0625rem]'
        }>
        <span className={'text-[3rem] font-semibold text-center'}>
          Fully-Decentralized
        </span>
        <span className={'text-[1.5rem] font-medium text-center'}>
          A Fully-Decentralized, Community-Governed Protocol
        </span>

        <div
          className={
            'create_boxes_contents flex gap-[10.3125rem] mt-[4.375rem]'
          }>
          <motion.div
            whileHover={{ scale: 1.2 }}
            className={
              'submit-proposal flex flex-col justify-center items-center gap-[2.5rem]'
            }>
            <img src={submit} alt="submit" className="w-[6rem] mx-auto" />
            <span className={'text-[1.5rem] font-semibold text-center'}>
              Submit a proposal for review
            </span>
            <p
              className={
                'w-[22.0625rem] whitespace-wrap text-[1.125rem] text-center'
              }>
              Discuss with community members and receive feedback
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.2 }}
            className={
              'on-chain flex flex-col justify-center items-center gap-[2.5rem]'
            }>
            <img src={onchain} alt="onchain" className="w-[6rem] mx-auto" />
            <span className={'text-[1.5rem] font-semibold text-center'}>
              On-chain governance
            </span>
            <p
              className={
                'w-[22.0625rem] whitespace-wrap text-[1.125rem] text-center '
              }>
              Vote for active proposals. Your locked $ROLL liquidity is your
              voting power
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.2 }}
            className={
              'community-driven flex flex-col justify-center items-center gap-[2.5rem]'
            }>
            <img src={community} alt="community" className="w-[6rem] mx-auto" />
            <span className={'text-[1.5rem] font-semibold text-center '}>
              Community-driven
            </span>
            <p
              className={
                'w-[22.0625rem] whitespace-wrap text-[1.125rem] text-center'
              }>
              Proposals that meet quorum and majority approval are implemented
            </p>
          </motion.div>
        </div>
        <img
          src={leftShadow}
          alt="leftShadow"
          className={'absolute left-[-15rem] top-[-12.5rem] w-[10.5rem]'}
        />
        <img
          src={rightShadow}
          alt="rightShadow"
          className={'absolute right-[-25rem] top-[-34.375rem] w-[11.9375rem]'}
        />
      </div>
    </div>
  )
}

export default BodyIntroduce
