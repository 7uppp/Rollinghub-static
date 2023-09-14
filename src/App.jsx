import { useEffect, useState } from 'react'
import Navbar from './components/navBar.jsx'
import Introduce from './components/introduce.jsx'
import BodyIntroduce from './components/bodyIntroduce.jsx'
import NewsLetter from './components/newsLetter.jsx'
import LoadingPage from './components/loadingPage.jsx'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 4000)
  }, [])

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-full z-10 ${
          isLoading ? 'fade-in' : 'fade-out'
        }`}>
        <LoadingPage />
      </div>
      <ChakraProvider>
        <div
          className={`w-[118.75rem] flex flex-col mx-auto justify-center items-center overflow-hidden ${
            isLoading ? 'fade-out' : 'fade-in'
          }`}>
          <div className="bg-hero-pattern bg-no-repeat bg-cover h-[68.3125rem] px-[14.875rem]">
            <div className="flex flex-col">
              <Navbar />
              <Introduce />
            </div>
          </div>
          <BodyIntroduce />
          <NewsLetter />
          <div className="w-full h-[3.125rem] border border-1 bg-purple-950 mt-[9.125rem]"></div>
        </div>
      </ChakraProvider>
    </>
  )
}

export default App
