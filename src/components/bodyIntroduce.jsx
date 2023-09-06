import listnft from "../assets/listnft.png";

const BodyIntroduce = () => {
  return (
    <div
      className={
        "bodyIntroduce_container w-full flex flex-col justify-center items-center "
      }
    >
      <span className={"introduce_title text-[48px]"}>How It Works</span>

      <div
        className={
          "choose_buttons_container flex flex-col justify-center items-center mt-[44px]"
        }
      >
        <div className={"buttons flex justify-center items-center gap-[242px]"}>
          <button className={"button_1 text-[24px] font-bold text-gray-500"}>
            Create boxes & list NFTs
          </button>
          <button className={"button_2  text-[24px] font-bold text-gray-500"}>
            Buy tickets & win NFTs
          </button>
        </div>

        <div className={"create_boxes_contents flex gap-[165px] mt-[70px]"}>
          <div
            className={
              "list_nft-into-boxes flex flex-col justify-center items-center gap-[40px]"
            }
          >
            <img src={listnft} alt="listnft" />
            <span className={"text-[24px]  font-semibold"}>
              List NFTs into boxes
            </span>
            <p className={"w-[353px] whitespace-wrap"}>
              List NFTs like what you do on other NFT marketplace, Rollinghub
              will issue tickets for you.
            </p>
          </div>

          <div
            className={
              "share_box  flex flex-col justify-center items-center gap-[40px]"
            }
          >
            <img src={listnft} alt="listnft" />
            <span className={"text-[24px]  font-semibold "}>
              List NFTs into boxes
            </span>
            <p className={"w-[353px] whitespace-wrap"}>
              List NFTs like what you do on other NFT marketplace, Rollinghub
              will issue tickets for you.
            </p>
          </div>

          <div
            className={
              "withdraw_eth  flex flex-col justify-center items-center gap-[40px]"
            }
          >
            <img src={listnft} alt="listnft" />
            <span className={"text-[24px]  font-semibold "}>
              List NFTs into boxes
            </span>
            <p className={"w-[353px] whitespace-wrap"}>
              List NFTs like what you do on other NFT marketplace, Rollinghub
              will issue tickets for you.
            </p>
          </div>
        </div>
      </div>

      <div
        className={
          "fully_decentralized_content_container flex flex-col items-center mt-[241px]"
        }
      >
        <span className={"text-[48px] font-semibold"}>Fully-Decentralized</span>
        <span className={"text-[24px] font-medium"}>
          A Fully-Decentralized, Community-Governed Protocol
        </span>

        <div className={"create_boxes_contents flex gap-[165px] mt-[70px]"}>
          <div
            className={
              "list_nft-into-boxes flex flex-col justify-center items-center gap-[40px]"
            }
          >
            <img src={listnft} alt="listnft" />
            <span className={"text-[24px]  font-semibold"}>
              Submit a proposal for review
            </span>
            <p className={"w-[353px] whitespace-wrap"}>
              Discuss with community members and receive feedback
            </p>
          </div>

          <div
            className={
              "share_box  flex flex-col justify-center items-center gap-[40px]"
            }
          >
            <img src={listnft} alt="listnft" />
            <span className={"text-[24px]  font-semibold "}>
              On-chain governance
            </span>
            <p className={"w-[353px] whitespace-wrap"}>
              Vote for active proposals. Your locked $ROLL liquidity is your
              voting power
            </p>
          </div>

          <div
            className={
              "withdraw_eth  flex flex-col justify-center items-center gap-[40px]"
            }
          >
            <img src={listnft} alt="listnft" />
            <span className={"text-[24px]  font-semibold "}>
              Community-driven
            </span>
            <p className={"w-[353px] whitespace-wrap"}>
              Proposals that meet quorum and majority approval are implemented
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyIntroduce;
