import update from '../assets/update.svg'
import { useState } from 'react'

const NewsLetter = () => {
  const [input, setInput] = useState('')
  const handleInputChange = (event) => {
    setInput(event.target.value)
  }

  const handleButtonClick = async () => {
    try {
      const response = await axios.post('YOUR_BACKEND_URL', {
        data: input,
      })
      console.log('Response from backend:', response.data)
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
        <button onClick={handleButtonClick}>
          <img src={update} alt="emailupdate" />
        </button>
      </div>
    </div>
  )
}

export default NewsLetter
