import logo from '../assets/logo.svg'
import discord from '../assets/discord.png'
import twitter from '../assets/twitter.png'
import telegram from '../assets/telegram.png'

const NavBar = () => {
  return (
    <div className={'navbar_container w-full mt-[1.375rem]'}>
      <div className={'navbar_wrapper flex justify-between items-center'}>
        <div>
          <img src={logo} alt="logo" className="w-[13.5625rem]" />
        </div>
        <div
          className={
            'social_platform_container flex justify-between items-center gap-[1.875rem]'
          }>
          <a href="">
            <img
              src={discord}
              alt="discord"
              className={'cursor-pointer w-[2.375rem]'}
            />
          </a>
          <a href="">
            <img
              src={twitter}
              alt="twitter"
              className={'cursor-pointer w-[2.375rem]'}
            />
          </a>

          <a href="">
            <img
              src={telegram}
              alt="telegram"
              className={'cursor-pointer w-[2.375rem]'}
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default NavBar
