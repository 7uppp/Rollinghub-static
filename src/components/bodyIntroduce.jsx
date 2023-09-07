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
  const [showCreateContentClicked, setShowCreateContentClicked] = useState(true)

  return (
    <div
      className={
        'bodyIntroduce_container w-[1397px] flex flex-col justify-center items-center '
      }>
      <span className={'introduce_title text-[48px]'}>How It Works</span>

      <motion.div
        className={
          'choose_buttons_container flex flex-col justify-center items-center mt-[44px]'
        }>
        <div className={'buttons flex justify-center items-center gap-[242px]'}>
          <button
            className={
              'button_1 text-[24px] font-bold text-gray-500 hover:text-blue-600 outline-none'
            }
            onClick={() => {
              setShowCreateContentClicked(true)
            }}>
            Create boxes & list NFTs
          </button>
          <button
            className={
              'button_2  text-[24px] font-bold text-gray-500 hover:text-blue-600 outline-none'
            }
            onClick={() => {
              setShowCreateContentClicked(false)
            }}>
            Buy tickets & win NFTs
          </button>
        </div>

        {showCreateContentClicked ? (
          <div className={'create_boxes_contents flex gap-[165px] mt-[70px]'}>
            <motion.div
              whileHover={{ scale: 1.2 }}
              className={
                'list_nft-into-boxes flex justify-center items-center'
              }>
              <div className="flex flex-col gap-[20px] ">
                <img src={listnft} alt="listnft" className="w-[96px] mx-auto" />
                <span
                  className={'text-[24px] font-semibold text-center h-[64px]'}>
                  List NFTs into boxes
                </span>
                <p
                  className={
                    'whitespace-wrap text-[18px] text-center h-[60px]'
                  }>
                  List NFTs like what you do on other NFT marketplace,
                  Rollinghub will issue tickets for you.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.2 }}
              className={'share_box  flex  justify-center items-center '}>
              <div className="flex flex-col gap-[20px] ">
                <img src={share} alt="shareIcon" className="w-[96px] mx-auto" />
                <span
                  className={'text-[24px] font-semibold text-center h-[64px]'}>
                  Share box link to friends or communities
                </span>
                <p
                  className={
                    'w-[353px] whitespace-wrap text-[18px] text-center h-[60px]'
                  }>
                  It's a good idea to call friends and communities to take
                  tickets from the box you created.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.2 }}
              className={'withdraw_eth flex justify-center items-center'}>
              <div className="flex flex-col gap-[20px]">
                <img
                  src={dollar}
                  alt="dollarIcon"
                  className="w-[96px] mx-auto"
                />
                <span
                  className={'text-[24px] font-semibold text-center h-[64px] '}>
                  Withdraw ETH
                </span>
                <p
                  className={
                    'w-[353px] whitespace-wrap text-[18px] text-center h-[60px] '
                  }>
                  You can withdraw ETH from boxes sold out.
                </p>
              </div>
            </motion.div>
          </div>
        ) : (
          <div className={'buy_tickets_contents flex gap-[165px] mt-[70px]'}>
            <motion.div
              whileHover={{ scale: 1.2 }}
              className={'find_nfts flex justify-center items-center ]'}>
              <div className="flex flex-col gap-[20px] ">
                <img src={find} alt="findnft" className="w-[96px] mx-auto" />
                <span
                  className={'text-[24px] font-semibold text-center h-[64px]'}>
                  Find NFTs & Buy tickets
                </span>
                <p
                  className={
                    'w-[353px] whitespace-wrap text-[18px] text-center h-[60px]'
                  }>
                  You can find NFTs, and buy tickets of the corresponding box to
                  win them.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.2 }}
              className={'share_box flex justify-center items-center'}>
              <div className="flex flex-col gap-[20px]">
                <img
                  src={share2}
                  alt="shareIcon"
                  className="w-[96px] mx-auto"
                />
                <span
                  className={'text-[24px] font-semibold text-center h-[64px]'}>
                  Share box link to friends or communities
                </span>
                <p
                  className={
                    'w-[353px] whitespace-wrap text-[18px] text-center h-[60px]'
                  }>
                  Help the box to draw.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.2 }}
              className={'withdraw_prize flex justify-center items-center'}>
              <div className="flex flex-col  gap-[20px]">
                <img
                  src={withdraw}
                  alt="withdraw"
                  className="w-[96px] mx-auto"
                />
                <span
                  className={
                    'text-[24px] font-semibold text-center  h-[64px] '
                  }>
                  Withdraw prizes
                </span>
                <p
                  className={
                    'w-[353px] whitespace-wrap text-[18px] text-center  h-[60px]'
                  }>
                  You can withdraw NFTs you win to your wallets, or list them in
                  a box directly.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </motion.div>

      <div
        className={
          'fully_decentralized_content_container relative flex flex-col items-center mt-[241px]'
        }>
        <span className={'text-[48px] font-semibold text-center'}>
          Fully-Decentralized
        </span>
        <span className={'text-[24px] font-medium text-center'}>
          A Fully-Decentralized, Community-Governed Protocol
        </span>

        <div className={'create_boxes_contents flex gap-[165px] mt-[70px]'}>
          <motion.div
            whileHover={{ scale: 1.2 }}
            className={
              'submit-proposal flex flex-col justify-center items-center gap-[40px]'
            }>
            <img src={submit} alt="submit" />
            <span className={'text-[24px] font-semibold text-center'}>
              Submit a proposal for review
            </span>
            <p className={'w-[353px] whitespace-wrap text-[18px] text-center'}>
              Discuss with community members and receive feedback
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.2 }}
            className={
              'on-chain flex flex-col justify-center items-center gap-[40px]'
            }>
            <img src={onchain} alt="onchain" />
            <span className={'text-[24px] font-semibold text-center'}>
              On-chain governance
            </span>
            <p className={'w-[353px] whitespace-wrap text-[18px] text-center '}>
              Vote for active proposals. Your locked $ROLL liquidity is your
              voting power
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.2 }}
            className={
              'community-driven  flex flex-col justify-center items-center gap-[40px]'
            }>
            <img src={community} alt="community" />
            <span className={'text-[24px] font-semibold text-center '}>
              Community-driven
            </span>
            <p className={'w-[353px] whitespace-wrap text-[18px] text-center'}>
              Proposals that meet quorum and majority approval are implemented
            </p>
          </motion.div>
        </div>
        <img
          src={leftShadow}
          alt="leftShadow"
          className={'absolute left-[-240px] top-[-200px]'}
        />
        <img
          src={rightShadow}
          alt="rightShadow"
          className={'absolute right-[-400px] top-[-550px]'}
        />
      </div>
    </div>
  )
}

export default BodyIntroduce
