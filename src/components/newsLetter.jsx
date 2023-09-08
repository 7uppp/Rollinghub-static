import { useState } from 'react'
import axios from 'axios'
import update from '../assets/update.png'
import { useToast } from '@chakra-ui/react'

const NewsLetter = () => {
  const [input, setInput] = useState('')
  const toast = useToast()
  const handleInputChange = (event) => {
    setInput(event.target.value)
  }
  const url = import.meta.env.VITE_SAVE_EMAIL_URL

  const handleButtonClick = async () => {
    if (!input) return

    try {
      await axios.post(url, { email: input })
      toast({
        title: 'Success',
        description: 'Thanks for your email! We will keep you updated!',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
    } catch (error) {
      console.error('Error sending data to backend:', error)
    }
  }

  return (
    <div className={'newsletter_container'}>
      <div
        className={
          'newsletter_wrapper flex flex-col items-center mt-[12.1875rem]'
        }>
        <span className={'text-[3rem] font-semibold text-center'}>
          NEWSLETTER
        </span>
        <p
          className={
            'text-[1.5rem] text-center font-medium mt-[2.8125rem] w-[59.375rem] whitespace-wrap'
          }>
          If you read these words, you are early. We plan to reward all early
          contributors. Drop us your email address to stay up to date!
        </p>
      </div>

      <div
        className={
          'w-[71.25rem] flex justify-between items-center border border-blue-700 px-[2.1875rem] py-[1.25rem] box-border rounded-[1rem] mt-[3.9375rem] '
        }
        style={{ backgroundColor: 'rgba(46,0,255,0.1)' }}>
        <input
          type="text"
          placeholder={'Enter Your email here'}
          className={'outline-none bg-transparent'}
          value={input}
          onChange={handleInputChange}
        />
        <button type="button" onClick={handleButtonClick}>
          <img src={update} alt="emailupdate" className="w-[2.125rem]" />
        </button>
      </div>
    </div>
  )
}

export default NewsLetter
