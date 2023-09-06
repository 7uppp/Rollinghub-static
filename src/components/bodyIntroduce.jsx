import listnft from "../assets/listnft.png";
import share from "../assets/share.png";
import dollar from "../assets/dollar.png";
import submit from "../assets/submit.png";
import onchain from "../assets/onchain.png";
import community from "../assets/community.png";
import leftShadow from "../assets/leftShadow.png";
import rightShadow from "../assets/rightShadow.png";

const BodyIntroduce = () => {
  return (
    <div
      className={
        "bodyIntroduce_container w-[1397px] flex flex-col justify-center items-center "
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
              "list_nft-into-boxes flex flex-col justify-center items-center gap-[60px]"
            }
          >
            <img src={listnft} alt="listnft" />
            <span className={"text-[24px] font-semibold text-center"}>
              List NFTs into boxes
            </span>
            <p className={"w-[353px] whitespace-wrap text-[18px] text-center"}>
              List NFTs like what you do on other NFT marketplace, Rollinghub
              will issue tickets for you.
            </p>
          </div>

          <div
            className={
              "share_box  flex flex-col justify-center items-center gap-[43px]"
            }
          >
            <img src={share} alt="shareIcon" />
            <span className={"text-[24px] font-semibold text-center"}>
              Share box link to friends or communities
            </span>
            <p className={"w-[353px] whitespace-wrap text-[18px] text-center"}>
              It's a good idea to call friends and communities to take tickets
              from the box you created.
            </p>
          </div>

          <div
            className={
              "withdraw_eth  flex flex-col justify-center items-center gap-[75px]"
            }
          >
            <img src={dollar} alt="dollarIcon" />
            <span className={"text-[24px] font-semibold text-center "}>
              Withdraw ETH
            </span>
            <p className={"w-[353px] whitespace-wrap text-[18px] text-center"}>
              You can withdraw ETH from boxes sold out.
            </p>
          </div>
        </div>
      </div>

      <div
        className={
          "fully_decentralized_content_container relative flex flex-col items-center mt-[241px]"
        }
      >
        <span className={"text-[48px] font-semibold text-center"}>
          Fully-Decentralized
        </span>
        <span className={"text-[24px] font-medium text-center"}>
          A Fully-Decentralized, Community-Governed Protocol
        </span>

        <div className={"create_boxes_contents flex gap-[165px] mt-[70px]"}>
          <div
            className={
              "submit-proposal flex flex-col justify-center items-center gap-[40px]"
            }
          >
            <img src={submit} alt="submit" />
            <span className={"text-[24px] font-semibold text-center"}>
              Submit a proposal for review
            </span>
            <p className={"w-[353px] whitespace-wrap text-[18px] text-center"}>
              Discuss with community members and receive feedback
            </p>
          </div>

          <div
            className={
              "on-chain flex flex-col justify-center items-center gap-[40px]"
            }
          >
            <img src={onchain} alt="onchain" />
            <span className={"text-[24px] font-semibold text-center"}>
              On-chain governance
            </span>
            <p className={"w-[353px] whitespace-wrap text-[18px] text-center "}>
              Vote for active proposals. Your locked $ROLL liquidity is your
              voting power
            </p>
          </div>

          <div
            className={
              "community-driven  flex flex-col justify-center items-center gap-[40px]"
            }
          >
            <img src={community} alt="community" />
            <span className={"text-[24px] font-semibold text-center "}>
              Community-driven
            </span>
            <p className={"w-[353px] whitespace-wrap text-[18px] text-center"}>
              Proposals that meet quorum and majority approval are implemented
            </p>
          </div>
        </div>
        <img
          src={leftShadow}
          alt="leftShadow"
          className={"absolute left-[-240px] top-[-200px]"}
        />
        <img
          src={rightShadow}
          alt="rightShadow"
          className={"absolute right-[-400px] top-[-550px]"}
        />
      </div>
    </div>
  );
};

export default BodyIntroduce;
