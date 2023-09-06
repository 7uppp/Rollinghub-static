import Navbar from "./components/navBar.jsx";
import Introduce from "./components/introduce.jsx";
import BodyIntroduce from "./components/bodyIntroduce.jsx";
import NewsLetter from "./components/newsLetter.jsx";

function App() {
  return (
    <div
      className={"w-[1900px] flex flex-col mx-auto justify-center items-center"}
    >
      <div className={" bg-hero-pattern h-[1093px] px-[238px]"}>
        <div className={"flex flex-col"}>
          <Navbar />
          <Introduce />
        </div>
      </div>
      <BodyIntroduce />
      <NewsLetter />
      <div
        className={" w-full h-[50px] border border-1 bg-purple-950 mt-[146px] "}
      ></div>
    </div>
  );
}

export default App;
