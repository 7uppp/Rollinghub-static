import Navbar from './components/navBar.jsx'
import Introduce from './components/introduce.jsx'
import BodyIntroduce from './components/bodyIntroduce.jsx'
import NewsLetter from './components/newsLetter.jsx'

function App() {
  return (
    <div
      className={
        'w-[118.75rem] flex flex-col mx-auto justify-center items-center'
      }>
      <div className={' bg-hero-pattern h-[68.3125rem] px-[14.875rem]'}>
        <div className={'flex flex-col'}>
          <Navbar />
          <Introduce />
        </div>
      </div>
      <BodyIntroduce />
      <NewsLetter />
      <div
        className={
          ' w-full h-[3.125rem] border border-1 bg-purple-950 mt-[9.125rem] '
        }></div>
    </div>
  )
}

export default App
