import { useState } from 'react'
import axios from 'axios'
import { useToast } from '@chakra-ui/react'

const NewsLetter = () => {
  const toast = useToast()
  const [email, setEmail] = useState('')

  const handleInputChange = (event) => {
    setEmail(event.target.value)
  }

  const validateEmail = async (e) => {
    e.preventDefault()

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

    if (emailPattern.test(email)) {
      try {
        const url = import.meta.env.VITE_SAVE_EMAIL_URL
        await axios.post(url, { email: email })

        toast({
          title: 'Success',
          description: 'Thanks for your email! We will keep you updated!',
          status: 'success',
          duration: 5000,
          isClosable: true,
          position: 'top',
        })
      } catch (error) {
        console.error('Error sending data to backend:', error)
        toast({
          title: 'Error',
          description:
            'There was an error sending your email. Please try again later.',
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: 'top',
        })
      }
    } else {
      toast({
        title: 'Invalid Email',
        description: 'Please enter a valid email address.',
        status: 'warning',
        duration: 5000,
        isClosable: true,
        position: 'top',
      })
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
          'w-[71.25rem] flex justify-between items-center border border-blue-700 px-[2.1875rem] py-[1.25rem] box-border rounded-[1rem] mt-[3.9375rem]'
        }
        style={{ backgroundColor: 'rgba(46,0,255,0.1)' }}>
        <form
          onSubmit={validateEmail}
          className="flex items-center justify-between w-full">
          <input
            type="text"
            placeholder={'Enter Your email here'}
            className={'outline-none bg-transparent'}
            value={email}
            onChange={handleInputChange}
          />
          <button type="submit" className="outline-none">
            <a className="relative grow inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2  rounded-full hover:text-white group hover:bg-gray-50">
              <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
              <span className="relative">Subscribe</span>
            </a>
          </button>
        </form>
      </div>
    </div>
  )
}

export default NewsLetter
