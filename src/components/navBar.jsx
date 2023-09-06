import logo from "../assets/logo.svg";
import discord from "../assets/discord.png";
import twitter from "../assets/twitter.png";
import telegram from "../assets/telegram.png";

const NavBar = () => {
  return (
    <div className={"navbar_container w-full mt-[22px]"}>
      <div className={"navbar_wrapper flex justify-between items-center"}>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div
          className={
            "social_platform_container flex justify-between items-center gap-[30px]"
          }
        >
          <img src={discord} alt="discord" />
          <img src={twitter} alt="twitter" />
          <img src={telegram} alt="telegram" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
