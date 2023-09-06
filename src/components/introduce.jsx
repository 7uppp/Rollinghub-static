import gift from "../assets/gift.png";

const Introduce = () => {
  return (
    <div className={"introduce_container mt-[185px] "}>
      <div className={" introduce_wrapper grid grid-cols-2 gap-x-20 "}>
        <div className={"content  flex flex-col justify-center"}>
          <div
            className={
              "introduce_content_top max-w-[570px] border-2 rounded-full  "
            }
          >
            <span
              className={
                "text-3xl text-white tracking-wider pl-[30px] pr-[26px] pt-[18px] pb-[16px] box-border "
              }
            >
              INTRODUCING ROLLINGHUB
            </span>
          </div>
          <div className={"the_first_raffle_marketplace w-[528px]"}>
            <span className={"text-white text-[72px]"}>
              The First Raffle Marketplace
            </span>
          </div>
          <div className={"introducing_sentence w-[663px] mt-[20px] "}>
            <p className={"text-white whitespace-wrap tracking-wider"}>
              Rollinghub is an NFT marketplace designed for collectors to unlock
              rare digital assets by raffle, and meanwhile create their own
              lottery to sell digital assets.
            </p>
          </div>
        </div>
        <div className={"content_image_container "}>
          <img src={gift} alt="gift" />
        </div>
      </div>
    </div>
  );
};

export default Introduce;
