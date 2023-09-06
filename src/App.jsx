import Navbar from "./components/navBar.jsx";
import Introduce from "./components/introduce.jsx";
import BodyIntroduce from "./components/bodyIntroduce.jsx";

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
    </div>
  );
}

export default App;
